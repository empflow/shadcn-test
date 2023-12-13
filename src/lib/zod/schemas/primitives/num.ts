import { z } from "zod";
import {
  getInvalidTypeErrMsg,
  getNumTooBigErrMsg,
  getNumTooSmallErrMsg,
  getRequiredErrMsg,
} from "../../utils";

type Params = {
  fieldName: string;
  min?: number;
  max?: number;
};

function getNumSchema({ fieldName, min, max }: Params) {
  let schema = z.number({
    required_error: getRequiredErrMsg(fieldName),
    invalid_type_error: getInvalidTypeErrMsg(fieldName, "number"),
  });
  if (min) schema = schema.min(min, getNumTooSmallErrMsg(fieldName, min));
  if (max) schema = schema.max(max, getNumTooBigErrMsg(fieldName, max));
  return schema;
}

export default getNumSchema;
