"use server";

import { Post } from "@prisma/client";
import { db } from "../db";
import { AddRecipeFormSchemaType } from "../zod/schemas/addRecipeForm";
import { ErrCode } from "../errCodes";
import wait from "../wait";
import { revalidatePath } from "next/cache";

export type AddRecipeActionState = {
  data?: Post;
  error?: ErrCode;
};

export default async function addRecipeAction(data: AddRecipeFormSchemaType) {
  await wait(1000);
  const recipe = await db.recipe.create({ data });
  revalidatePath("/");
  return recipe;
}
