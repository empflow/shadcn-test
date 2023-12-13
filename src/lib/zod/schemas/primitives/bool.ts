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

function getBoolSchema({ fieldName }: Params) {
  return z.boolean({
    required_error: getRequiredErrMsg(fieldName),
    invalid_type_error: getInvalidTypeErrMsg(fieldName, "number"),
  });
}

export default getBoolSchema;
