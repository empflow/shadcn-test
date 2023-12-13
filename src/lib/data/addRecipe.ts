import { Prisma } from "@prisma/client";
import { db } from "../db";
import { cache } from "react";

const addRecipe = cache(async (createArgs: Prisma.RecipeCreateArgs) => {
  await db.recipe.create(createArgs);
});

export default addRecipe;
