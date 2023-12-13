"use server";

import { Recipe } from "@prisma/client";
import { db } from "../db";
import {
  AddRecipeFormSchemaServer,
  AddRecipeFormSchemaType,
} from "../zod/schemas/addRecipeForm";
import { ErrCode } from "../errCodes";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import addRecipe from "../data/addRecipe";

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
  const parsedRecipeData = AddRecipeFormSchemaServer.safeParse(recipeData);
  if (!parsedRecipeData.success) {
    return { error: "INVALID_DATA_SUBMITTED" };
  }

  await addRecipe({ data: parsedRecipeData.data });
  revalidatePath("/");
  redirect("/");
}
