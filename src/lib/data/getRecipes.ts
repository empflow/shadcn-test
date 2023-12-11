import { db } from "../db";

export default async function getRecipes() {
  return db.recipe.findMany({
    orderBy: { updatedAt: "desc" },
  });
}
