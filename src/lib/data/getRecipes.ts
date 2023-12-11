import { db } from "../db";

export default async function getRecipes() {
  const recipes = await db.recipe.findMany({
    orderBy: { updatedAt: "desc" },
  });
  console.log(recipes);
  return recipes;
}
