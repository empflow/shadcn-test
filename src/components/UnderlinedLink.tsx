import { cn } from "@/lib/shadcnUtils";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  underlineOnlyOnHover?: boolean;
  className?: string;
} & LinkProps;

export default function UnderlinedLink({
  children,
  underlineOnlyOnHover = false,
  className,
  ...props
}: Props) {
  return (
    <Link
      {...props}
      className={cn(
        underlineOnlyOnHover ? "hover:underline" : "underline",
        className
      )}
    >
      {children}
    </Link>
  );
}
