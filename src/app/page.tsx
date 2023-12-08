import RecipesGrid from "@/components/home/RecipesGrid";

export default async function Home() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-8">Recipes</h1>
      <RecipesGrid />
    </>
  );
}
