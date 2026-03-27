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
  Sparkles,
} from "lucide-react";
import { useState, useEffect } from "react";

const founders = [
  {
    name: "Vishalgouda Patil",
    role: "Lead Systems Architect",
    specialty: "TECHNICAL INFRASTRUCTURE",
    bio: "The engineering force behind the agency. I architect high-performance digital infrastructure that allows your business to scale without technical debt, ensuring every visitor journey is optimized for conversion.",
    details: [
      {
        label: "Premium Web Deployment",
        desc: "Developing ultra-fast, mobile-responsive storefronts. Not just 'sites', but high-conversion assets designed for sub-2-second load times.",
        icon: <Globe size={18} />,
      },
      {
        label: "Local SEO Dominance",
        desc: "Hard-coding your business into the 'Google Map Pack' and local search results to ensure you are the first choice in your territory.",
        icon: <Search size={18} />,
      },
      {
        label: "Full-Stack Ad Management",
        desc: "Deploying and managing data-driven Meta & Google ad campaigns with precision targeting to maximize ROI.",
        icon: <MousePointer2 size={18} />,
      },
      {
        label: "WhatsApp Bulk Ecosystems",
        desc: "Implementing automated bulk messaging and lead-nurturing systems to keep your business top-of-mind instantly.",
        icon: <MessageSquare size={18} />,
      },
    ],
    icon: <Terminal className="text-cyan-400" size={32} />,
    glow: "shadow-[0_0_0_1px_rgba(6,182,212,0.18),0_0_20px_rgba(6,182,212,0.12)]",
    hoverGlow: "hover:shadow-[0_0_40px_-12px_rgba(6,182,212,0.28)]",
    border: "border-cyan-400/40",
    accent: "text-cyan-400",
    badge: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
  },
  {
    name: "Om Ubrani",
    role: "Growth & Creative Director",
    specialty: "MARKET ACQUISITION",
    bio: "The strategic bridge between your brand and the customer. I specialize in the 'Attention Economy'—capturing eyeballs in crowded markets and converting that raw attention into long-term brand trust.",
    details: [
      {
        label: "Cinematic Content",
        desc: "Directing and editing scroll-stopping reels and videos that capture attention in the first 3 seconds of the user journey.",
        icon: <Video size={18} />,
      },
      {
        label: "Strategic Outreach",
        desc: "Managing high-level client acquisition and identifying untapped market opportunities for aggressive brand expansion.",
        icon: <Cpu size={18} />,
      },
    ],
    icon: <Video className="text-blue-400" size={32} />,
    glow: "shadow-[0_0_0_1px_rgba(59,130,246,0.18),0_0_20px_rgba(59,130,246,0.12)]",
    hoverGlow: "hover:shadow-[0_0_40px_-12px_rgba(59,130,246,0.28)]",
    border: "border-blue-400/35",
    accent: "text-blue-400",
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
      {/* Header */}
      <div className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase text-white leading-none drop-shadow-[0_0_14px_rgba(255,255,255,0.04)]">
            THE <span className="text-cyan-400">ARCHITECTS.</span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "90px" }}
            viewport={{ once: false, amount: 0.9 }}
            transition={{ delay: 0.35, duration: 0.85, ease: "circOut" }}
            className="h-[2px] bg-cyan-500 mt-4"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-zinc-600 font-mono text-[10px] tracking-[0.4em] uppercase mt-4"
          >
            Leadership Engineered for Growth
          </motion.p>
        </motion.div>
      </div>

      {/* Founder Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {founders.map((founder, i) => (
          <motion.div
            key={i}
            layoutId={`card-${founder.name}`}
            onClick={() => setSelectedFounder(founder)}
            initial={{ opacity: 0, y: 80, scale: 0.94, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.18 }}
            transition={{
              delay: 0.1 + i * 0.12,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -8 }}
            className={`group relative p-10 md:p-12 bg-zinc-950 border rounded-[3.2rem] cursor-pointer transition-all duration-500 overflow-hidden ${founder.border} ${founder.glow} md:border-zinc-800/50 md:shadow-none ${founder.hoverGlow}`}
          >
            {/* Ambient glow layer */}
            <div className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent blur-2xl" />
            </div>

            {/* Top Row */}
            <div className="mb-10 flex justify-between items-start gap-4 relative z-10">
              <div className="p-4 bg-zinc-950 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors">
                {founder.icon}
              </div>

              <span
                className={`px-4 py-1.5 rounded-full text-[9px] font-mono tracking-widest uppercase border ${founder.badge}`}
              >
                {founder.specialty}
              </span>
            </div>

            {/* Name */}
            <h3 className={`text-4xl md:text-[2.6rem] font-black text-white mb-4 uppercase italic tracking-tighter transition-colors group-hover:${founder.accent} relative z-10`}>
              {founder.name}
            </h3>

            {/* Role */}
            <p className="text-zinc-500 font-mono text-[10px] tracking-[0.3em] uppercase mb-6 relative z-10">
              {founder.role}
            </p>

            {/* Bio */}
            <p className="text-zinc-400 text-lg leading-relaxed font-light mb-10 line-clamp-3 relative z-10">
              {founder.bio}
            </p>

            {/* Bottom Strip */}
            <div className="flex items-center gap-3 relative z-10">
              <div className="h-px flex-1 bg-zinc-800" />
              <span className="text-[9px] font-mono text-cyan-500 uppercase tracking-[0.2em] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                Tap to View Details
              </span>
              <ArrowRight size={12} className="text-cyan-500" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedFounder && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-12">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFounder(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-xl"
            />

            {/* Modal Card */}
            <motion.div
              layoutId={`card-${selectedFounder.name}`}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full max-w-5xl max-h-[88vh] bg-zinc-950/50 backdrop-blur-3xl border border-white/10 rounded-[3rem] md:rounded-[4rem] shadow-[0_0_80px_rgba(0,0,0,0.45)] flex flex-col overflow-hidden"
            >
              {/* Modal Header */}
              <div className="p-8 md:p-14 pb-8 flex justify-between items-center border-b border-white/5 bg-white/[0.015]">
                <div className="flex items-center gap-6 md:gap-8">
                  <div className="p-4 bg-black/40 rounded-2xl border border-white/10 text-cyan-400">
                    {selectedFounder.icon}
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                      {selectedFounder.name}
                    </h3>
                    <p className="text-cyan-400 font-mono text-[10px] tracking-[0.3em] uppercase mt-2">
                      {selectedFounder.role}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedFounder(null)}
                  className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all active:scale-95"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-8 md:p-14 space-y-14">
                <section>
                  <h4 className="text-zinc-600 font-mono text-[9px] uppercase tracking-[0.5em] mb-6">
                    Strategic Mission
                  </h4>
                  <p className="text-zinc-300 text-lg md:text-2xl leading-relaxed font-normal">
                    {selectedFounder.bio}
                  </p>
                </section>

                <section>
                  <h4 className="text-zinc-600 font-mono text-[9px] uppercase tracking-[0.5em] mb-8">
                    Technical Impact
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    {selectedFounder.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          duration: 0.55,
                          delay: 0.08 * idx,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="flex flex-col p-7 md:p-8 bg-white/[0.025] rounded-[2.2rem] border border-white/5"
                      >
                        <div className="mb-4 text-cyan-500 opacity-90">
                          {detail.icon}
                        </div>

                        <h5 className="text-white font-bold text-base uppercase tracking-tight mb-2">
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

              {/* Modal Footer */}
              <div className="p-7 md:p-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center bg-black/20 gap-5 md:gap-6">
                <div className="flex items-center gap-3 text-zinc-500">
                  <ShieldCheck size={16} className="text-emerald-500" />
                  <span className="text-[9px] font-mono uppercase tracking-[0.3em]">
                    Verified Growth Partner
                  </span>
                </div>

                <button
                  onClick={() => setSelectedFounder(null)}
                  className="w-full md:w-auto px-10 md:px-12 py-4 md:py-5 bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-cyan-400 transition-all active:scale-95"
                >
                  Return to Dashboard
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}