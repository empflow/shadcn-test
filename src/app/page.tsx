import RecipesGrid from "@/components/Home/RecipesGrid/Index";
import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mb-6">
        <PageTitle className="mb-2">Recipes</PageTitle>
        <Link href="/add-recipe">
          <Button variant="outline">
            Add Recipe
            <Plus className="ml-1" />
          </Button>
        </Link>
      </div>
      <RecipesGrid />
    </>
  );
}
