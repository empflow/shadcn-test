"use client";

import { ReactNode } from "react";
import { Button } from "./ui/button";
import Loading from "./Loading";

type Props = {
  children: ReactNode;
  isLoading?: boolean;
};

export default function FormSubmitBtn({ children, isLoading }: Props) {
  return (
    <Button className="flex items-center gap-1" disabled={isLoading}>
      <span>{children}</span> {isLoading && <Loading className="w-4 h-4" />}
    </Button>
  );
}
