import { cache } from "react";
import { db } from "../db";

const getRecipe = cache(async (id: string) => {
  return db.recipe.findUnique({
    where: { id },
  });
});

export default getRecipe;
