import api from "../api";
import Recipe from "../types/recipe";

export default async function getRecipes() {
  return (await api.get<Recipe[]>("/recipes")).data;
}
