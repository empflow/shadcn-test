"use client";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

type Props = {};

export default function RecipesGridPublishBtn({}: Props) {
  const { pending } = useFormStatus();
  let content: ReactNode;

  if (!pending) content = "Publish";
  else content = "Publishing...";

  return <Button disabled={pending}>{content}</Button>;
}
