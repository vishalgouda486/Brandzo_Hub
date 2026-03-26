"use client";

import { motion } from "framer-motion";
import { Zap, Globe, BarChart3, Rocket } from "lucide-react";
import Founders from "@/components/Founders";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import Process from "@/components/Process";
import Work from "@/components/Work";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", damping: 20, stiffness: 100 } 
    },
  };

  // PREMIUM OUT-OF-THE-BOX ANIMATION: "THE GHOST TRACKING"
  // On hover, the letters expand and a subtle secondary layer "echoes" the movement
  const letterAnimation = {
    initial: { letterSpacing: "-0.05em", opacity: 1 },
    hover: {
      letterSpacing: "0.05em",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const echoAnimation = {
    initial: { opacity: 0, x: 0, skewX: 0 },
    hover: {
      opacity: [0, 0.3, 0],
      x: [0, 60, 100],
      skewX: [0, -30, -60],
      transition: { duration: 0.9, ease: "easeOut" }
    }
  };

  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-cyan-500/30">
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-cyan-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="px-6 py-20 max-w-7xl mx-auto relative z-10"> 
        <motion.div variants={container} initial="hidden" animate="show">
          
          <div className="mb-32 mt-10">
            <motion.span variants={item} className="text-cyan-500 font-mono text-[10px] uppercase tracking-[0.8em] mb-8 block">
              System Architecture MMXXIV
            </motion.span>
            
            {/* THE CRAZY PREMIUM BRAND ANIMATION */}
            <motion.div 
              className="relative cursor-pointer w-fit group"
              initial="initial"
              whileHover="hover"
            >
              {/* The "Echo" Layer - Animates once out to the right */}
              <motion.h1 
                variants={echoAnimation}
                className="absolute inset-0 text-7xl md:text-[11rem] font-black leading-[0.8] tracking-tighter italic uppercase pointer-events-none text-cyan-400 select-none"
              >
                Brandzo <br /> Hub
              </motion.h1>

              {/* The Main Layer - Variable Tracking */}
              <motion.h1 
                variants={letterAnimation}
                className="relative text-7xl md:text-[11rem] font-black leading-[0.8] tracking-tighter italic uppercase mb-6 z-10"
              >
                Brandzo <br />
                <span className="text-cyan-400">Hub</span><span className="text-white">.</span>
              </motion.h1>
            </motion.div>

            {/* TAGLINE - Elegant Float */}
            <motion.p
              variants={item}
              whileHover={{ x: 15 }}
              className="text-2xl md:text-4xl font-extralight tracking-[0.3em] text-zinc-500 uppercase italic cursor-default w-fit"
            >
              Your Digital <span className="text-white font-bold transition-all duration-700 group-hover:tracking-widest">Growth Engine</span>
            </motion.p>
          </div>

          {/* Mission Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-40 border-t border-zinc-900/50 pt-16">
            <motion.div variants={item}>
              <p className="text-zinc-600 font-mono text-[10px] uppercase mb-6 tracking-widest">The Directive</p>
              <p className="text-2xl text-zinc-400 font-light leading-relaxed">
                We engineer high-frequency <span className="text-white">B2B acquisition pipelines</span> that convert attention into measurable equity.
              </p>
            </motion.div>
            <motion.div variants={item} className="flex items-end">
              <p className="text-sm text-zinc-500 font-mono leading-relaxed border-l border-cyan-500/30 pl-6">
                SYNCED ADS • LOCAL DOMINANCE • AUTOMATED OUTREACH • PERFORMANCE WEB
              </p>
            </motion.div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {[
              { title: "Ad Sync", icon: Zap, color: "hover:border-cyan-500", shadow: "hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.2)]", desc: "Cross-platform data synchronization for Meta and Google." },
              { title: "Local SEO", icon: Globe, color: "hover:border-blue-500", shadow: "hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.2)]", desc: "Aggressive local map-pack and search cluster dominance." },
              { title: "Content", icon: Rocket, color: "hover:border-purple-500", shadow: "hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.2)]", desc: "Cinematic promo assets and narrative-driven growth." },
              { title: "WhatsApp", icon: BarChart3, color: "hover:border-zinc-500", shadow: "hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]", desc: "Automated precision outreach to key decision makers." },
            ].map((box, i) => (
              <motion.div 
                key={i}
                variants={item}
                whileHover={{ y: -10 }}
                className={`h-full bg-zinc-950 border border-zinc-900 rounded-[2.5rem] p-10 group transition-all duration-500 cursor-pointer ${box.color} ${box.shadow}`}
              >
                <box.icon className="text-zinc-500 mb-8 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700" size={28} />
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">{box.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">{box.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Marquee />
      <Process />
      <Work />
      <Founders />
      <Footer />
    </main>
  );
}