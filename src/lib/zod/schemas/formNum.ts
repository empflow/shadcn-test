import { z } from "zod";
import {
  getInvalidNumberErrMsg,
  getInvalidTypeErrMsg,
  getNumTooBigErrMsg,
  getNumTooSmallErrMsg,
  getRequiredErrMsg,
} from "../utils";
import isNullish from "@/lib/isNullish";

type Opts =
  | {
      min?: number;
      max?: number;
    }
  | undefined;

const getFormNumSchema = (fieldName: string, { min, max }: Opts = {}) => {
  return z
    .union(
      [
        z
          .string({
            required_error: getRequiredErrMsg(fieldName),
            invalid_type_error: getInvalidTypeErrMsg(fieldName, "string"),
          })
          .min(1, getRequiredErrMsg(fieldName)),
        z.number({
          required_error: getRequiredErrMsg(fieldName),
          invalid_type_error: getInvalidTypeErrMsg(fieldName, "number"),
        }),
      ],
      {
        errorMap: (_issues, { data, defaultError }) => {
          if (isNullish(data)) return { message: getRequiredErrMsg(fieldName) };
          return { message: defaultError };
        },
      }
    )
    .refine((val) => !isNaN(Number(val)), getInvalidNumberErrMsg(fieldName))
    .pipe(
      z.coerce
        .number()
        .refine(
          (val) => (min ? val >= min : true),
          getNumTooSmallErrMsg(fieldName, min as number)
        )
        .refine(
          (val) => (max ? val <= max : true),
          getNumTooBigErrMsg(fieldName, max as number)
        )
    );
};

export default getFormNumSchema;

/*
  .refine((val) => !isNaN(val), getInvalidNumberErrMsg(fieldName))
  .refine(
    (val) => (min ? val >= min : true),
    getNumTooSmallErrMsg(fieldName, min as number)
  )
  .refine(
    (val) => (max ? val <= max : true),
    getNumTooBigErrMsg(fieldName, max as number)
  ),
*/
