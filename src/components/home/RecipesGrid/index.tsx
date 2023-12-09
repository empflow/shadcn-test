import { Suspense } from "react";
import RecipesGridContent from "./Content";
import RecipesGridSkeleton from "./Skeleton";

export default async function RecipesGrid() {
  return (
    <Suspense fallback={<RecipesGridSkeleton />}>
      <RecipesGridContent />
    </Suspense>
  );
}
