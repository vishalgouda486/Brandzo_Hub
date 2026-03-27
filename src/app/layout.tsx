import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Cursor from "@/components/Cursor";
import ProgressBar from "@/components/ProgressBar";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brandzo Hub | Digital Growth Engine",
  description: "Performance-First B2B Marketing Agency.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#050505] text-white selection:bg-cyan-500/30`}>
        <ProgressBar />
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}