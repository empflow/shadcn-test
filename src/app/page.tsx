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

export default async function Home() {
  const recipes = await getRecipes();
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map(({ description, id, time, title, vegan }) => (
          <Card key={id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>
                {time} mins
                <br />
                {vegan ? "Vegan" : "Not Vegan"}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">{description}</CardContent>
            <CardFooter>
              <Button variant="outline">View Recipe</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
