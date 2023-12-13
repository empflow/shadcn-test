import { cache } from "react";
import { db } from "../db";

const getRecipes = cache(async () => {
  return db.recipe.findMany({
    orderBy: { updatedAt: "desc" },
  });
});

export default getRecipes;
