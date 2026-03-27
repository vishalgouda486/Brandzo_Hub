"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] md:w-auto">
      <nav className="px-6 py-3 bg-zinc-900/55 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-between gap-8 shadow-[0_0_30px_rgba(6,182,212,0.06)]">
        
        {/* BRAND NAME */}
        <a
          href="#"
          className="text-white font-bold text-sm tracking-tighter hover:text-cyan-400 hover:brightness-125 transition-all duration-300 cursor-pointer whitespace-nowrap"
        >
          BRANDZO <span className="text-cyan-400">HUB</span>
        </a>

        {/* DESKTOP NAV - EXACT SAME */}
        <div className="hidden md:flex gap-6 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
          <a href="#services" className="hover:text-cyan-400 hover:brightness-125 transition-all duration-300">Services</a>
          <a href="#work" className="hover:text-cyan-400 hover:brightness-125 transition-all duration-300">Work</a>
          <a href="#architects" className="hover:text-cyan-400 hover:brightness-125 transition-all duration-300">Architects</a>
          <a href="#contact" className="hover:text-cyan-400 hover:brightness-125 transition-all duration-300">Contact</a>
        </div>

        {/* MOBILE MENU BUTTON ONLY */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 rounded-full border border-white/10 bg-white/5"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* MOBILE DROPDOWN ONLY */}
      {menuOpen && (
        <div className="md:hidden mt-3 bg-zinc-950/90 backdrop-blur-xl border border-white/10 rounded-[2rem] p-5 flex flex-col gap-4 shadow-[0_0_30px_rgba(6,182,212,0.08)]">
          <a href="#services" onClick={() => setMenuOpen(false)} className="text-zinc-300 hover:text-cyan-400 transition-all uppercase font-mono text-xs tracking-widest">Services</a>
          <a href="#work" onClick={() => setMenuOpen(false)} className="text-zinc-300 hover:text-cyan-400 transition-all uppercase font-mono text-xs tracking-widest">Work</a>
          <a href="#architects" onClick={() => setMenuOpen(false)} className="text-zinc-300 hover:text-cyan-400 transition-all uppercase font-mono text-xs tracking-widest">Architects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-zinc-300 hover:text-cyan-400 transition-all uppercase font-mono text-xs tracking-widest">Contact</a>
        </div>
      )}
    </div>
  );
}