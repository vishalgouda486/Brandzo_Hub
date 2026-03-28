"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Search,
  Zap,
  MousePointer2,
  MessageSquare,
  Smartphone,
  ArrowUpRight,
} from "lucide-react";

const PROJECTS = [
  {
    title: "Lead-Ready Business Website",
    type: "Website Development",
    tech: "Conversion-Focused Build",
    description:
      "A premium business website designed to help visitors quickly understand the service, trust the brand, and make enquiries without confusion.",
    metric: "Fast & Conversion Ready",
    icon: <Layout size={20} />,
    color: "from-cyan-500/20",
    glow: "shadow-[0_0_0_1px_rgba(6,182,212,0.16),0_0_18px_rgba(6,182,212,0.10)]",
    hoverGlow: "hover:shadow-[0_0_44px_-10px_rgba(6,182,212,0.32)]",
    border: "border-cyan-400/25",
  },
  {
    title: "Google Business Visibility Setup",
    type: "Local SEO / GMB SEO",
    tech: "Local Search Optimization",
    description:
      "A structured local SEO setup built to help businesses appear more professionally on Google Search and Google Maps.",
    metric: "Better Local Discovery",
    icon: <Search size={20} />,
    color: "from-blue-500/20",
    glow: "shadow-[0_0_0_1px_rgba(59,130,246,0.16),0_0_18px_rgba(59,130,246,0.10)]",
    hoverGlow: "hover:shadow-[0_0_44px_-10px_rgba(59,130,246,0.32)]",
    border: "border-blue-400/25",
  },
  {
    title: "Reels & Content System",
    type: "Content Creation",
    tech: "Brand Visibility Assets",
    description:
      "A content structure for reels, posts, and short-form visuals designed to keep the brand active, engaging, and relevant online.",
    metric: "Consistent Brand Presence",
    icon: <Zap size={20} />,
    color: "from-purple-500/20",
    glow: "shadow-[0_0_0_1px_rgba(168,85,247,0.14),0_0_18px_rgba(168,85,247,0.10)]",
    hoverGlow: "hover:shadow-[0_0_44px_-10px_rgba(168,85,247,0.28)]",
    border: "border-purple-400/22",
  },
  {
    title: "Paid Ads Lead Funnel",
    type: "Meta / Google Ads",
    tech: "Lead Generation System",
    description:
      "A traffic and lead generation setup built to attract high-intent audiences through Meta Ads, Google Ads, and landing page flow.",
    metric: "Lead-Driven Campaigns",
    icon: <MousePointer2 size={20} />,
    color: "from-emerald-500/20",
    glow: "shadow-[0_0_0_1px_rgba(16,185,129,0.16),0_0_18px_rgba(16,185,129,0.10)]",
    hoverGlow: "hover:shadow-[0_0_44px_-10px_rgba(16,185,129,0.30)]",
    border: "border-emerald-400/22",
  },
  {
    title: "WhatsApp Lead Handling Workflow",
    type: "Automation / Follow-Up",
    tech: "Instant Lead Response",
    description:
      "A WhatsApp-based enquiry handling system designed to respond faster, reduce missed leads, and improve follow-up consistency.",
    metric: "Faster Enquiry Response",
    icon: <MessageSquare size={20} />,
    color: "from-green-500/20",
    glow: "shadow-[0_0_0_1px_rgba(34,197,94,0.16),0_0_18px_rgba(34,197,94,0.10)]",
    hoverGlow: "hover:shadow-[0_0_44px_-10px_rgba(34,197,94,0.30)]",
    border: "border-green-400/22",
  },
  {
    title: "Mobile-First Business Experience",
    type: "UI / UX Optimization",
    tech: "Responsive Customer Journey",
    description:
      "A mobile-first website and interface strategy built for the way modern customers actually browse, enquire, and make decisions.",
    metric: "Optimized for Mobile Users",
    icon: <Smartphone size={20} />,
    color: "from-orange-500/20",
    glow: "shadow-[0_0_0_1px_rgba(249,115,22,0.14),0_0_18px_rgba(249,115,22,0.10)]",
    hoverGlow: "hover:shadow-[0_0_44px_-10px_rgba(249,115,22,0.30)]",
    border: "border-orange-400/22",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 bg-[#050505] scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.78 }}
            transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.04)]"
          >
            SAMPLE <span className="text-cyan-400">WORK.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.78 }}
            transition={{ delay: 0.34, duration: 0.55 }}
            className="text-zinc-200 font-mono text-xs tracking-[0.35em] mt-4 uppercase"
          >
            Capability Showcase // Systems We Build & Manage
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((item, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.95,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.8,
                delay: 0.18 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: false, amount: 0.72 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`group relative bg-zinc-950 border rounded-[2.5rem] overflow-hidden transition-all duration-150 ${item.border} ${item.hoverGlow} ${item.glow}`}
            >
              <div className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent blur-2xl`} />
              </div>

              <div className={`h-52 w-full bg-gradient-to-br ${item.color} to-transparent relative flex items-center justify-center overflow-hidden border-b border-white/5`}>
                <motion.svg
                  className="absolute inset-0 w-full h-full opacity-20"
                  viewBox="0 0 100 100"
                  initial={{ opacity: 0, pathLength: 0 }}
                  whileInView={{ opacity: 0.2, pathLength: 1 }}
                  transition={{
                    duration: 1.1,
                    delay: 0.24 + i * 0.05,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.72 }}
                >
                  <path
                    d="M0 80 Q 25 20 50 50 T 100 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-cyan-400"
                  />
                </motion.svg>

                <motion.div
                  initial={{ scale: 0.88, opacity: 0, y: 20 }}
                  whileInView={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.28 + i * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: false, amount: 0.72 }}
                  className="relative z-20 text-center px-4"
                >
                  <div className="text-3xl md:text-[2.2rem] font-black text-white tracking-tighter mb-1 uppercase italic">
                    {item.metric}
                  </div>
                  <div className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest">
                    Sample Outcome
                  </div>
                </motion.div>

                <div className="absolute top-5 right-5 z-20">
                  <div className="p-3 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-150">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              <div className="p-8 relative z-20">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-zinc-900 rounded-xl text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-150 border border-white/5">
                    {item.icon}
                  </div>

                  <span className="text-[10px] font-mono text-zinc-200 uppercase tracking-widest">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight leading-tight">
                  {item.title}
                </h3>

                <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-light">
                  {item.description}
                </p>

                <div className="pt-6 border-t border-zinc-800/50 flex justify-between items-center">
                  <span className="text-[9px] font-mono text-zinc-300 uppercase tracking-widest">
                    Focus: {item.tech}
                  </span>

                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-mono text-zinc-300 uppercase tracking-widest hidden sm:block">
                      Ready
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}