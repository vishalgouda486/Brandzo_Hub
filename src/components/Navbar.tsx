"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] w-[95%] md:w-auto">
      <nav className="px-8 md:px-10 py-4 md:py-4.5 bg-zinc-900/65 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-between gap-10 shadow-[0_0_40px_rgba(6,182,212,0.06)]">
        <a
          href="#"
          className="text-white font-black text-lg md:text-xl tracking-tight hover:text-cyan-400 transition-all duration-200 whitespace-nowrap italic uppercase"
        >
          BRANDZO <span className="text-cyan-400">HUB</span>
        </a>

        <div className="hidden md:flex gap-9 text-[12px] font-mono uppercase tracking-[0.24em] text-zinc-200 items-center">
          <a href="#services" className="hover:text-cyan-400 transition-all duration-150">
            Services
          </a>
          <a href="#work" className="hover:text-cyan-400 transition-all duration-150">
            Work
          </a>
          <a href="#architects" className="hover:text-cyan-400 transition-all duration-150">
            Team
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-all duration-150">
            Contact
          </a>

          <a
            href="https://wa.me/917624815112?text=Hi%20Brandzo%20Hub%2C%20I%20want%20to%20book%20a%20free%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-7 py-3 rounded-full border border-cyan-400 text-cyan-400 font-bold text-[11px] tracking-[0.22em] hover:bg-cyan-400 hover:text-black transition-all duration-200 flex items-center gap-2"
          >
            CONSULT
            <ArrowUpRight size={14} />
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2.5 rounded-full border border-white/10 bg-white/5"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden mt-3 bg-zinc-950/95 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 flex flex-col gap-5 text-sm text-zinc-300 shadow-[0_0_40px_rgba(0,0,0,0.25)]">
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#architects" onClick={() => setMenuOpen(false)}>
            Team
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

          <a
            href="https://wa.me/917624815112?text=Hi%20Brandzo%20Hub%2C%20I%20want%20to%20book%20a%20free%20consultation."
            className="mt-3 px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 text-center font-bold hover:bg-cyan-400 hover:text-black transition-all duration-200"
          >
            Book Free Consultation
          </a>
        </div>
      )}
    </div>
  );
}