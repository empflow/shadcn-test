"use client";

import { ReactNode } from "react";
import { Button } from "./ui/button";
import Loading from "./Loading";
import { cn } from "@/lib/shadcnUtils";

type Props = {
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
};

export default function FormSubmitBtn({
  children,
  className,
  isLoading,
}: Props) {
  return (
    <Button
      className={cn("flex items-center gap-1", className)}
      disabled={isLoading}
    >
      <span>{children}</span> {isLoading && <Loading className="w-4 h-4" />}
    </Button>
  );
}
