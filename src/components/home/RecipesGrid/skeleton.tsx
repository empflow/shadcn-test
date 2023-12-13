import getIterable from "@/lib/getIterable";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import RepeatingElem from "@/components/RepeatingElem";

export default function RecipesGridSkeleton() {
  const iterable = getIterable(6);
  return (
    <>
      <div
        role="status"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {iterable.map((i) => (
          <Card key={i} className="flex flex-col">
            <CardHeader>
              <Skeleton className="h-6" />
              <Skeleton className="h-5" />
            </CardHeader>
            <CardContent className="flex-grow flex flex-col gap-2 justify-between">
              <div className="space-y-3">
                <RepeatingElem count={2} elem={<Skeleton className="h-4" />} />
                <Skeleton className="h-4 w-1/2" />
              </div>
              <Skeleton className="w-full h-full aspect-square" />
            </CardContent>
            <CardFooter>
              <Skeleton className="h-10 w-[120px]" />
            </CardFooter>
          </Card>
        ))}
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
}
