"use client";
import NextErrorProps from "@/lib/types/nextErrorProps";

export default function Error({ error: _, reset }: NextErrorProps) {
  return (
    <div>
      <h1>An error has occurred</h1>
      <button onClick={reset}>Try Again</button>
    </div>
  );
}
