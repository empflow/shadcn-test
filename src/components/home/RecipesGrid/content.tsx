import ImageWithFallback from "@/components/ImageWithFallback";
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

export default async function RecipesGridContent() {
  const recipes = await getRecipes();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map(({ description, id, time, title, vegan, image }) => (
          <Card key={id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{time} mins</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col gap-2 justify-between">
              <p className="line-clamp-4">{description}</p>
              <div className="relative aspect-square">
                <ImageWithFallback
                  alt={`An image of ${title}`}
                  src={`/imgs/${image}`}
                  className="rounded w-full object-cover"
                  fill
                  fallbackSrc="/imgs/bird.jpg"
                />
                {vegan && (
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
              <Button variant="outline">View Recipe</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
