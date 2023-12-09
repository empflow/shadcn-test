"use server";

import { Post } from "@prisma/client";
import { db } from "../db";
import addRecipeFormSchema, {
  AddRecipeFormSchema,
} from "../zod/schemas/addRecipeForm";
import { ErrCode } from "../errCodes";
import wait from "../wait";

export type AddRecipeActionState = {
  data?: Post;
  error?: ErrCode;
};

// export default async function addRecipeAction(
//   _prev: AddRecipeActionState,
//   formData: FormData
// ): Promise<AddRecipeActionState> {
//   await wait(2000);
//   const parsedRecipe = addRecipeFormSchema.safeParse({
//     ...Object.fromEntries(formData.entries()),
//   });
//   if (!parsedRecipe.success) {
//     return { error: "INVALID_DATA_SUBMITTED" };
//   }
//   const post = await db.post.create({ data: parsedRecipe.data });
//   return { data: post };
// }

export default async function addRecipeAction(data: AddRecipeFormSchema) {
  await wait(2000);
  const recipeData = addRecipeFormSchema.parse(data);
  const recipe = await db.recipe.create({ data: recipeData });
  return recipe;
}
