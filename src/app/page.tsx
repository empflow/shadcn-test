import PageTitle from "@/components/PageTitle";
import RecipesGrid from "@/components/home/RecipesGrid/Index";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="mb-6">
        <PageTitle className="mb-2">Recipes</PageTitle>
        <Link href="/add-recipe">
          <Button variant="outline" className="flex gap-1">
            <span>Add Recipe</span>
            <Plus />
          </Button>
        </Link>
      </div>
      <RecipesGrid />
    </>
  );
}
