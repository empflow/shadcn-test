import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import getRecipes from "@/lib/data/getRecipes";
import Link from "next/link";

export default async function RecipesGridContent() {
  const recipes = await getRecipes();
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map(({ description, id, timeToCookMins, title, isVegan }) => (
          <Card key={id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{timeToCookMins} mins</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col gap-2 justify-between">
              <p className="line-clamp-4">{description}</p>
              <div className="relative aspect-square">
                {isVegan && (
                  <Badge
                    variant="secondary"
                    className="absolute shadow-md bottom-2 left-2"
                  >
                    Vegan
                  </Badge>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/recipes/${id}`}>
                <Button variant="outline">View Recipe</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
