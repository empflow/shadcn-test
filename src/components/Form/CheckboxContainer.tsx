import { cn } from "@/lib/shadcnUtils";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export default function FormCheckboxContainer({ className, children }: Props) {
  return (
    <div className={cn("flex items-center gap-1", className)}>{children}</div>
  );
}
