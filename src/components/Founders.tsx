"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Video,
  Terminal,
  X,
  ShieldCheck,
  Globe,
  Search,
  MessageSquare,
  MousePointer2,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect } from "react";

const founders = [
  {
    name: "Vishalgouda Patil",
    role: "Technical & Growth Systems Lead",
    specialty: "WEBSITES • ADS • AUTOMATION",
    bio: "I focus on building and managing the technical side of business growth — from websites and paid traffic to local visibility, WhatsApp systems, and lead-ready infrastructure.",
    details: [
      {
        label: "Website Development & Maintenance",
        desc: "Fast, premium business websites with ongoing updates, fixes, support, and long-term management.",
        icon: <Globe size={18} />,
      },
      {
        label: "Local SEO & Google Visibility",
        desc: "Google Business Profile optimization and local SEO setup to improve discoverability and trust.",
        icon: <Search size={18} />,
      },
      {
        label: "Google & Meta Ads Management",
        desc: "Lead-focused ad campaign setup and management built to bring high-intent traffic to your business.",
        icon: <MousePointer2 size={18} />,
      },
      {
        label: "WhatsApp Systems & Lead Flow",
        desc: "Bulk messaging, follow-up workflows, and automation designed to reduce missed leads and improve response speed.",
        icon: <MessageSquare size={18} />,
      },
    ],
    icon: <Terminal className="text-cyan-400" size={32} />,
    glow: "shadow-[0_0_0_1px_rgba(6,182,212,0.14),0_0_18px_rgba(6,182,212,0.10)]",
    hoverGlow: "hover:shadow-[0_0_44px_-10px_rgba(6,182,212,0.32)]",
    border: "border-cyan-400/25",
    badge: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
  },
  {
    name: "Om Ubrani",
    role: "Creative & Brand Growth Lead",
    specialty: "CONTENT • SOCIAL • OUTREACH",
    bio: "I focus on the creative and brand side of growth — helping businesses stay visible, active, and engaging through content, reels, and consistent digital communication.",
    details: [
      {
        label: "Content Creation & Reels",
        desc: "Visual content built to improve brand presence, engagement, and social media performance.",
        icon: <Video size={18} />,
      },
      {
        label: "Social Media & Growth Support",
        desc: "Support for content planning, business communication, and consistent online brand presence.",
        icon: <Cpu size={18} />,
      },
    ],
    icon: <Video className="text-blue-400" size={32} />,
    glow: "shadow-[0_0_0_1px_rgba(59,130,246,0.14),0_0_18px_rgba(59,130,246,0.10)]",
    hoverGlow: "hover:shadow-[0_0_44px_-10px_rgba(59,130,246,0.32)]",
    border: "border-blue-400/25",
    badge: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  },
];

export default function Founders() {
  const [selectedFounder, setSelectedFounder] = useState<null | (typeof founders)[0]>(null);

  useEffect(() => {
    document.body.style.overflow = selectedFounder ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedFounder]);

  return (
    <section
      id="architects"
      className="py-32 px-6 max-w-7xl mx-auto scroll-mt-32 relative z-10"
    >
      <div className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 0.75, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase text-white leading-none">
            THE <span className="text-cyan-400">TEAM.</span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "90px" }}
            viewport={{ once: false, amount: 0.82 }}
            transition={{ delay: 0.34, duration: 0.6, ease: "circOut" }}
            className="h-[2px] bg-cyan-500 mt-4"
          />

          <motion.p
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.82 }}
            transition={{ delay: 0.42, duration: 0.5 }}
            className="text-zinc-200 font-mono text-xs tracking-[0.35em] uppercase mt-4"
          >
            Built for Execution, Consistency & Growth
          </motion.p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {founders.map((founder, i) => (
          <motion.div
            key={i}
            layoutId={`card-${founder.name}`}
            onClick={() => setSelectedFounder(founder)}
            initial={{ opacity: 0, y: 80, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.72 }}
            transition={{
              delay: 0.18 + i * 0.08,
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -8, scale: 1.03 }}
            className={`group relative p-10 md:p-12 bg-zinc-950 border rounded-[3rem] cursor-pointer transition-all duration-150 overflow-hidden ${founder.border} ${founder.glow} ${founder.hoverGlow}`}
          >
            <div className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent blur-2xl" />
            </div>

            <div className="mb-10 flex justify-between items-start gap-4 relative z-10">
              <div className="p-4 bg-zinc-950 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors duration-150">
                {founder.icon}
              </div>

              <span className={`px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest uppercase border ${founder.badge}`}>
                {founder.specialty}
              </span>
            </div>

            <h3 className="text-4xl md:text-[2.6rem] font-black text-white mb-4 uppercase italic tracking-tighter relative z-10">
              {founder.name}
            </h3>

            <p className="text-zinc-200 font-mono text-[11px] tracking-[0.28em] uppercase mb-6 relative z-10">
              {founder.role}
            </p>

            <p className="text-zinc-300 text-lg leading-relaxed font-light mb-10 line-clamp-3 relative z-10">
              {founder.bio}
            </p>

            <div className="flex items-center gap-3 relative z-10">
              <div className="h-px flex-1 bg-zinc-800" />
              <span className="text-sm font-mono text-cyan-400 uppercase tracking-[0.22em] opacity-100 drop-shadow-[0_0_12px_rgba(6,182,212,0.5)] animate-pulse">
                Tap to View Details
              </span>
              <ArrowRight size={16} className="text-cyan-500" />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedFounder && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.16 }}
              onClick={() => setSelectedFounder(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 16 }}
              transition={{
                duration: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full max-w-3xl max-h-[78vh] bg-zinc-950/85 backdrop-blur-2xl border border-cyan-400/20 rounded-[2rem] shadow-[0_0_80px_rgba(0,0,0,0.45)] flex flex-col overflow-hidden mt-16 md:mt-0"
            >
              <div className="p-5 md:p-8 flex justify-between items-center border-b border-white/5 bg-white/[0.015]">
                <div className="flex items-center gap-4 md:gap-6 min-w-0">
                  <div className="p-3 bg-black/40 rounded-2xl border border-white/10 text-cyan-400 shrink-0">
                    {selectedFounder.icon}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg md:text-3xl font-black text-white uppercase tracking-tighter leading-none truncate">
                      {selectedFounder.name}
                    </h3>
                    <p className="text-cyan-400 font-mono text-[9px] md:text-[10px] tracking-[0.22em] uppercase mt-2">
                      {selectedFounder.role}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedFounder(null)}
                  className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all duration-150 active:scale-95 shrink-0"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-5 md:p-8 space-y-8">
                <section>
                  <h4 className="text-zinc-200 font-mono text-xs uppercase tracking-[0.35em] mb-4">
                    Role Overview
                  </h4>
                  <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-normal">
                    {selectedFounder.bio}
                  </p>
                </section>

                <section>
                  <h4 className="text-zinc-200 font-mono text-xs uppercase tracking-[0.35em] mb-5">
                    Key Responsibilities
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedFounder.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          duration: 0.28,
                          delay: 0.03 * idx,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="flex flex-col p-5 bg-white/[0.025] rounded-[1.6rem] border border-white/5"
                      >
                        <div className="mb-4 text-cyan-500 opacity-90">
                          {detail.icon}
                        </div>

                        <h5 className="text-white font-bold text-sm md:text-base uppercase tracking-tight mb-2">
                          {detail.label}
                        </h5>

                        <p className="text-zinc-400 text-sm leading-relaxed">
                          {detail.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="p-5 md:p-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center bg-black/20 gap-4">
                <div className="flex items-center gap-3 text-zinc-500 text-center md:text-left">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em]">
                    Reliable Growth Support Team
                  </span>
                </div>

                <button
                  onClick={() => setSelectedFounder(null)}
                  className="w-full md:w-auto px-8 py-4 bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-cyan-400 transition-all duration-150 active:scale-95"
                >
                  Return
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}