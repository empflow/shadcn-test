"use client";

import { Button } from "@/components/ui/button";
import NextErrorProps from "@/lib/types/nextErrorProps";
import Link from "next/link";

export default function GlobalError({ reset }: NextErrorProps) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={reset}>Try again</button>
        <Button variant="link">
          <Link href="/">Go to Home</Link>
        </Button>
      </body>
    </html>
  );
}
