import { number, z } from "zod";
import checkFormNumber from "../checkFormNumber";
import {
  getInvalidTypeErrMsg,
  getNumTooBigErrMsg,
  getNumTooSmallErrMsg,
  getRequiredErrMsg,
  getStrTooLongErrMsg,
  getStrTooShortErrMsg,
} from "../utils";
import getFormNumSchema from "./formNum";

const DEFAULT_MIN_LENGTH = 3;

const TITLE_MAX_LENGTH = 300;
const DESCRIPTION_MAX_LENGTH = 1500;
const TIME_TO_COOK_MINS_MIN = 0.1;
const TIME_TO_COOK_MINS_MAX = 10000;

const FIELDS = {
  title: "Title",
  timeToCookMins: "Time to cook",
  description: "Description",
  isVegan: "Vegan",
} as const;

const AddRecipeFormSchema = z.object({
  title: z
    .string({
      invalid_type_error: getInvalidTypeErrMsg(FIELDS.title, "string"),
      required_error: getRequiredErrMsg(FIELDS.title),
    })
    .min(1, { message: getRequiredErrMsg(FIELDS.title) })
    .min(DEFAULT_MIN_LENGTH, {
      message: getStrTooShortErrMsg(FIELDS.title, DEFAULT_MIN_LENGTH),
    })
    .max(TITLE_MAX_LENGTH, {
      message: getStrTooLongErrMsg(FIELDS.title, TITLE_MAX_LENGTH),
    }),
  timeToCookMins: getFormNumSchema(FIELDS.timeToCookMins, {
    min: TIME_TO_COOK_MINS_MIN,
    max: TIME_TO_COOK_MINS_MAX,
  }),
  description: z
    .string({
      invalid_type_error: getInvalidTypeErrMsg(FIELDS.description, "string"),
      required_error: getRequiredErrMsg(FIELDS.description),
    })
    .min(1, { message: getRequiredErrMsg(FIELDS.description) })
    .min(DEFAULT_MIN_LENGTH, {
      message: getStrTooShortErrMsg(FIELDS.description, DEFAULT_MIN_LENGTH),
    })
    .max(
      DESCRIPTION_MAX_LENGTH,
      getStrTooLongErrMsg(FIELDS.description, DESCRIPTION_MAX_LENGTH)
    ),
  isVegan: z.boolean({
    invalid_type_error: getInvalidTypeErrMsg(FIELDS.isVegan, "boolean"),
    required_error: getRequiredErrMsg(FIELDS.isVegan),
  }),
});

export const AddRecipeFormSchemaServer = AddRecipeFormSchema.extend({
  timeToCookMins: number({
    required_error: getRequiredErrMsg(FIELDS.timeToCookMins),
    invalid_type_error: getInvalidTypeErrMsg(FIELDS.timeToCookMins, "number"),
  })
    .min(1, getNumTooSmallErrMsg(FIELDS.timeToCookMins, TIME_TO_COOK_MINS_MIN))
    .max(
      TIME_TO_COOK_MINS_MAX,
      getNumTooBigErrMsg(FIELDS.timeToCookMins, TIME_TO_COOK_MINS_MAX)
    ),
});
export type AddRecipeFormSchemaServerType = z.infer<
  typeof AddRecipeFormSchemaServer
>;

export type AddRecipeFormSchemaType = z.infer<typeof AddRecipeFormSchema>;
export type AddRecipeFormSchemaInputType = z.input<typeof AddRecipeFormSchema>;
export default AddRecipeFormSchema;
