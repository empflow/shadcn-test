import { z } from "zod";
import getFormNumSchema from "./formNum";
import getNumSchema from "./primitives/num";
import getStrSchema from "./primitives/str";
import getBoolSchema from "./primitives/bool";

const DEFAULT_MIN_LENGTH = 3;

const TITLE_MAX_LENGTH = 300;
const DESCRIPTION_MAX_LENGTH = 1500;
const CONTENT_MAX_LENGTH = 50000;
const TIME_TO_COOK_MINS_MIN = 0.1;
const TIME_TO_COOK_MINS_MAX = 10000;

const FIELDS = {
  title: "Title",
  timeToCookMins: "Time to cook",
  description: "Description",
  isVegan: "Vegan",
  content: "Content",
} as const;

const AddRecipeFormSchema = z.object({
  title: getStrSchema({
    fieldName: FIELDS.title,
    min: DEFAULT_MIN_LENGTH,
    max: TITLE_MAX_LENGTH,
  }),
  timeToCookMins: getFormNumSchema(FIELDS.timeToCookMins, {
    min: TIME_TO_COOK_MINS_MIN,
    max: TIME_TO_COOK_MINS_MAX,
  }),
  description: getStrSchema({
    fieldName: FIELDS.description,
    min: DEFAULT_MIN_LENGTH,
    max: DESCRIPTION_MAX_LENGTH,
  }),
  content: getStrSchema({
    fieldName: FIELDS.content,
    min: DEFAULT_MIN_LENGTH,
    max: CONTENT_MAX_LENGTH,
  }),
  isVegan: getBoolSchema({ fieldName: FIELDS.isVegan }),
});

export const AddRecipeFormSchemaServer = AddRecipeFormSchema.extend({
  timeToCookMins: getNumSchema({
    fieldName: FIELDS.timeToCookMins,
    min: TIME_TO_COOK_MINS_MIN,
    max: TIME_TO_COOK_MINS_MAX,
  }),
});
export type AddRecipeFormSchemaServerType = z.infer<
  typeof AddRecipeFormSchemaServer
>;

export type AddRecipeFormSchemaType = z.infer<typeof AddRecipeFormSchema>;
export type AddRecipeFormSchemaInputType = z.input<typeof AddRecipeFormSchema>;
export default AddRecipeFormSchema;
