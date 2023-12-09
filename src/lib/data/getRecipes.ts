import { db } from "../db";

export default function getRecipes() {
  return db.recipe.findMany({ take: 12 });
}
