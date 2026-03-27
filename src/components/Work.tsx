"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Layout,
  Smartphone,
  Search,
  Zap,
  MousePointer2,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";

const CONCEPTS = [
  {
    title: "The Lead-Magnet Engine",
    type: "Web Design",
    tech: "High-Conversion Architecture",
    description:
      "A website built specifically to turn visitors into callers. We removed the clutter so your customers find the 'Book Now' button in under 3 seconds.",
    metric: "40% More Inquiries",
    icon: <Layout size={20} />,
    color: "from-cyan-500/20",
    glow: "shadow-[0_0_0_1px_rgba(6,182,212,0.18),0_0_18px_rgba(6,182,212,0.12)]",
    hoverGlow: "hover:shadow-[0_0_38px_-12px_rgba(6,182,212,0.32)]",
    border: "border-cyan-400/40",
    link: "#",
  },
  {
    title: "Google Search Shield",
    type: "SEO / GMB",
    tech: "Local Market Dominance",
    description:
      "We make your business the first thing people see when searching 'near me'. It's like having a digital billboard on the busiest street in town.",
    metric: "Top 3 Ranking",
    icon: <Search size={20} />,
    color: "from-blue-500/20",
    glow: "shadow-[0_0_0_1px_rgba(59,130,246,0.18),0_0_18px_rgba(59,130,246,0.12)]",
    hoverGlow: "hover:shadow-[0_0_38px_-12px_rgba(59,130,246,0.32)]",
    border: "border-blue-400/40",
    link: "#",
  },
  {
    title: "The 'Scroll-Stop' Reels",
    type: "Content Creation",
    tech: "Attention Engineering",
    description:
      "Cinematic short videos designed to grab attention instantly. We turn boring services into viral content that people actually want to watch.",
    metric: "2.5x Engagement",
    icon: <Zap size={20} />,
    color: "from-purple-500/20",
    glow: "shadow-[0_0_0_1px_rgba(168,85,247,0.16),0_0_18px_rgba(168,85,247,0.10)]",
    hoverGlow: "hover:shadow-[0_0_38px_-12px_rgba(168,85,247,0.28)]",
    border: "border-purple-400/35",
    link: "#",
  },
  {
    title: "Zero-Waste Ad Sync",
    type: "Meta & Google Ads",
    tech: "Smart Budget Allocation",
    description:
      "Stop throwing money at ads that don't work. We sync your Meta and Google ads so they only show up for people ready to buy right now.",
    metric: "Lower Lead Cost",
    icon: <MousePointer2 size={20} />,
    color: "from-emerald-500/20",
    glow: "shadow-[0_0_0_1px_rgba(16,185,129,0.18),0_0_18px_rgba(16,185,129,0.10)]",
    hoverGlow: "hover:shadow-[0_0_38px_-12px_rgba(16,185,129,0.28)]",
    border: "border-emerald-400/35",
    link: "#",
  },
  {
    title: "WhatsApp Autopilot",
    type: "B2B Automation",
    tech: "Instant Outreach",
    description:
      "A system that automatically messages your leads the second they sign up. It's like having a 24/7 sales assistant who never sleeps.",
    metric: "Instant Response",
    icon: <MessageSquare size={20} />,
    color: "from-green-500/20",
    glow: "shadow-[0_0_0_1px_rgba(34,197,94,0.18),0_0_18px_rgba(34,197,94,0.10)]",
    hoverGlow: "hover:shadow-[0_0_38px_-12px_rgba(34,197,94,0.28)]",
    border: "border-green-400/35",
    link: "#",
  },
  {
    title: "Mobile-First Dominance",
    type: "UI/UX Strategy",
    tech: "Mobile Optimization",
    description:
      "90% of your clients are on their phones. We build your digital presence to look and work perfectly on a thumb-scroll, ensuring no lost sales.",
    metric: "99% Mobile Score",
    icon: <Smartphone size={20} />,
    color: "from-orange-500/20",
    glow: "shadow-[0_0_0_1px_rgba(249,115,22,0.16),0_0_18px_rgba(249,115,22,0.10)]",
    hoverGlow: "hover:shadow-[0_0_38px_-12px_rgba(249,115,22,0.28)]",
    border: "border-orange-400/35",
    link: "#",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 bg-[#050505] scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.45 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.04)]"
          >
            PROVEN <span className="text-cyan-400">BLUEPRINTS.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-zinc-500 font-mono text-[10px] tracking-[0.4em] mt-4 uppercase"
          >
            Internal Stress-Tests // Ready for Deployment
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONCEPTS.map((item, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.94,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.95,
                delay: 0.12 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: false, amount: 0.14 }}
              whileHover={{ y: -10 }}
              className={`group relative bg-zinc-950 border rounded-[2.5rem] overflow-hidden transition-all duration-500 md:border-zinc-800/50 ${item.border} md:${item.hoverGlow} ${item.glow} md:shadow-none`}
            >
              {/* Ambient glow layer */}
              <div className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent blur-2xl`} />
              </div>

              {/* Top Visual */}
              <div
                className={`h-52 w-full bg-gradient-to-br ${item.color} to-transparent relative flex items-center justify-center overflow-hidden border-b border-white/5`}
              >
                {/* Animated line pattern */}
                <motion.svg
                  className="absolute inset-0 w-full h-full opacity-20"
                  viewBox="0 0 100 100"
                  initial={{ opacity: 0, pathLength: 0 }}
                  whileInView={{ opacity: 0.2, pathLength: 1 }}
                  transition={{
                    duration: 1.4,
                    delay: 0.2 + i * 0.08,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <path
                    d="M0 80 Q 25 20 50 50 T 100 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-cyan-400"
                  />
                </motion.svg>

                {/* Metric block */}
                <motion.div
                  initial={{ scale: 0.86, opacity: 0, y: 20 }}
                  whileInView={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.25 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="relative z-20 text-center px-4"
                >
                  <div className="text-4xl md:text-[2.7rem] font-black text-white tracking-tighter mb-1 uppercase italic drop-shadow-[0_0_12px_rgba(255,255,255,0.05)]">
                    {item.metric}
                  </div>
                  <div className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest">
                    Performance Increase
                  </div>
                </motion.div>

                {/* Corner CTA icon */}
                <div className="absolute top-5 right-5 z-20">
                  <div className="p-3 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative z-20">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-zinc-900 md:bg-zinc-800 rounded-xl text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-300 border border-white/5">
                    {item.icon}
                  </div>

                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight leading-tight">
                  {item.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                  {item.description}
                </p>

                {/* Bottom strip */}
                <div className="pt-6 border-t border-zinc-800/50 flex justify-between items-center">
                  <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
                    Strategy: {item.tech}
                  </span>

                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest hidden sm:block">
                      Active
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