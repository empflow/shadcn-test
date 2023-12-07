import { Suspense } from "react";
import RecipesGridContent from "./content";
import RecipesGridSkeleton from "./skeleton";

export default async function RecipesGrid() {
  return (
    <Suspense fallback={<RecipesGridSkeleton />}>
      <RecipesGridContent />
    </Suspense>
  );
}
