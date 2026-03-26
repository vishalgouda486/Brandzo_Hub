import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Cursor from "@/components/Cursor";
import ProgressBar from "@/components/ProgressBar"; // Import here

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
        <ProgressBar /> {/* Use it here */}
        <Cursor />
        
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 bg-zinc-900/55 backdrop-blur-xl border border-white/10 rounded-full flex items-center gap-8 shadow-[0_0_30px_rgba(6,182,212,0.06)]">
          {/* CLICK BRAND NAME TO GO TO BEGINNING */}
          <a href="#" className="text-white font-bold text-sm tracking-tighter hover:text-cyan-400 hover:brightness-125 transition-all duration-300 cursor-pointer">
            BRANDZO <span className="text-cyan-400">HUB</span>
          </a>
          
          <div className="hidden md:flex gap-6 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
            <a href="#services" className="hover:text-cyan-400 hover:brightness-125 transition-all duration-300">Services</a>
            <a href="#work" className="hover:text-cyan-400 hover:brightness-125 transition-all duration-300">Work</a>
            <a href="#architects" className="hover:text-cyan-400 hover:brightness-125 transition-all duration-300">Architects</a>
            <a href="#contact" className="hover:text-cyan-400 hover:brightness-125 transition-all duration-300">Contact</a>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}