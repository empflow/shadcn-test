import { z } from "zod";
import checkFormNumber from "../checkFormNumber";

const defaultMinLength = 3;

const TITLE_MAX_LENGTH = 300;
const DESCRIPTION_MAX_LENGTH = 1500;

const required_error = "This field is required";
const tooShortErr = (fieldName: string, minLength: number) =>
  `${fieldName} must be at least ${minLength} characters long`;
const tooLongErr = (fieldName: string, maxLength: number) =>
  `${fieldName} must not exceed ${maxLength} characters`;

const addRecipeFormSchema = z.object({
  title: z
    .string({ invalid_type_error: "Title must be a string", required_error })
    .min(defaultMinLength, { message: tooShortErr("Title", defaultMinLength) })
    .max(TITLE_MAX_LENGTH, { message: tooLongErr("Title", TITLE_MAX_LENGTH) }),
  timeToCookMins: z
    .union([z.string(), z.number()])
    .refine(checkFormNumber, "Time to cook is required")
    .pipe(
      z.coerce
        .number()
        .gt(0, { message: "Time to cook must be greater than zero" })
    ),
  description: z
    .string({
      invalid_type_error: "Description must be a string",
      required_error,
    })
    .min(defaultMinLength, {
      message: tooShortErr("Description", defaultMinLength),
    })
    .max(
      DESCRIPTION_MAX_LENGTH,
      tooLongErr("Description", DESCRIPTION_MAX_LENGTH)
    ),
  isVegan: z.boolean({
    invalid_type_error: "Vegan must be a boolean",
    required_error,
  }),
});

export type AddRecipeFormSchema = z.infer<typeof addRecipeFormSchema>;
export type AddRecipeFormSchemaInput = z.input<typeof addRecipeFormSchema>;
export default addRecipeFormSchema;
