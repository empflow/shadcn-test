import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainContent from "@/components/MainContent";
import Providers from "@/components/Providers";

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
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Header />
          <MainContent {...{ children }} />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
