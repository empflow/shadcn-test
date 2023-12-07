import getRecipes from "@/lib/data/getRecipes";

export default async function Home() {
  const data = await getRecipes();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
