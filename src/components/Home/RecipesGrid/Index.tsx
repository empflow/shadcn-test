import { Suspense } from "react";
import RecipesGridSkeleton from "./Skeleton";
import RecipesGridContent from "./Content";

export default function RecipesGrid() {
  return (
    <Suspense fallback={<RecipesGridSkeleton />}>
      <RecipesGridContent />
    </Suspense>
  );
}
