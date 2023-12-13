import { z } from "zod";
import {
  getInvalidTypeErrMsg,
  getRequiredErrMsg,
  getStrTooLongErrMsg,
  getStrTooShortErrMsg,
} from "../../utils";

type Params = {
  fieldName: string;
  isRequired?: boolean;
  min?: number;
  max?: number;
};

function getStrSchema({ fieldName, isRequired = true, min, max }: Params) {
  let schema = z.string({
    invalid_type_error: getInvalidTypeErrMsg(fieldName, "string"),
    required_error: getRequiredErrMsg(fieldName),
  });
  if (isRequired) {
    schema = schema.min(1, { message: getRequiredErrMsg(fieldName) });
  }
  if (min) schema = schema.min(min, getStrTooShortErrMsg(fieldName, min));
  if (max) schema = schema.max(max, getStrTooLongErrMsg(fieldName, max));
  return schema;
}

export default getStrSchema;
