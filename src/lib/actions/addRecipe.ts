"use server";

import { Recipe } from "@prisma/client";
import { db } from "../db";
import { AddRecipeFormSchemaType } from "../zod/schemas/addRecipeForm";
import { ErrCode } from "../errCodes";
import wait from "../wait";
import { revalidatePath } from "next/cache";

type Success = {
  data: Recipe;
  error?: undefined;
};

type Error = {
  data?: undefined;
  error: ErrCode;
};

export type AddRecipeActionReturnT = Success | Error;

export default async function addRecipeAction(
  recipeData: AddRecipeFormSchemaType
): Promise<AddRecipeActionReturnT> {
  await wait(1000);
  const recipe = await db.recipe.create({ data: recipeData });

  revalidatePath("/");
  return { data: recipe };
}
