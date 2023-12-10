import { Suspense } from "react";
import RecipesGridSkeleton from "./Skeleton";
import RecipesGridContent from "./Content";

export default async function RecipesGrid() {
  return (
    <Suspense fallback={<RecipesGridSkeleton />}>
      <RecipesGridContent />
    </Suspense>
  );
}
