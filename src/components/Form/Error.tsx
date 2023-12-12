import { cn } from "@/lib/shadcnUtils";
import { forwardRef } from "react";

const FormError = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & { msg?: string }
>(({ className, children, msg, ...props }, ref) => {
  if (!msg) return null;

  return (
    <p
      ref={ref}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
      aria-live="polite"
    >
      {msg}
    </p>
  );
});

export default FormError;
