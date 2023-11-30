import type { Metadata } from "next";
import "@/style/global.scss";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: [ "latin" ] });

export const metadata: Metadata = {
  title: "Meme Wars",
  description: "A place where you'll discover that you can't take a joke",
};

export default function RootLayout({ children, }: { children: ReactNode }) {
  return (
    <html lang="en">
    <body className={ inter.className }>{ children }</body>
    </html>
  );
}
