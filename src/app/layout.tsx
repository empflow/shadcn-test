import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Recipes App",
  description: "Generated by empflow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="p-4 mt-8">
          <main className="max-w-[1000px] m-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
