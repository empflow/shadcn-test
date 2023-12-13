import { db } from "../db";

export default async function getRecipe(id: string) {
  return db.recipe.findUnique({
    where: { id },
  });
}
