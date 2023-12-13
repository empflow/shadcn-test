import PageTitle from "@/components/PageTitle";
import { Badge } from "@/components/ui/badge";
import getRecipe from "@/lib/data/getRecipe";
import { notFound } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  convertMinsToHoursMinsStr,
  formatDate,
  formatDateRelative,
} from "@/lib/timeFormatters";
import moment from "moment";

export default async function Recipe({
  params: { id },
}: {
  params: { id: string };
}) {
  const recipe = await getRecipe(id);
  if (!recipe) notFound();
  const { content, isVegan, timeToCookMins, title, updatedAt } = recipe;

  return (
    <article>
      <div className="flex gap-2 mb-2 items-center">
        <PageTitle className="mb-0">{title}</PageTitle>
        {isVegan && <Badge>Vegan</Badge>}
      </div>

      <div className="mb-6">
        <p>
          <span className="text-gray-500">Time to cook:</span>{" "}
          {convertMinsToHoursMinsStr(timeToCookMins)}
        </p>
        <p>
          <span className="text-gray-500">Last updated:</span>{" "}
          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger>{formatDateRelative(updatedAt)}</TooltipTrigger>
              <TooltipContent>{formatDate(updatedAt)}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </p>
      </div>

      <p>{content}</p>
    </article>
  );
}
