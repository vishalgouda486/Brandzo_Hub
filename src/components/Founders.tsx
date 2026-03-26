"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Video, Terminal, X, ShieldCheck, Zap, Globe, Search, MessageSquare, MousePointer2, Cpu, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const founders = [
  {
    name: "Vishalgouda Patil",
    role: "Lead Systems Architect",
    specialty: "TECHNICAL INFRASTRUCTURE",
    bio: "The engineering force behind the agency. I architect high-performance digital infrastructure that allows your business to scale without technical debt, ensuring every visitor journey is optimized for conversion.",
    details: [
      { label: "Premium Web Deployment", desc: "Developing ultra-fast, mobile-responsive storefronts. Not just 'sites', but high-conversion assets designed for sub-2-second load times.", icon: <Globe size={18} /> },
      { label: "Local SEO Dominance", desc: "Hard-coding your business into the 'Google Map Pack' and local search results to ensure you are the first choice in your territory.", icon: <Search size={18} /> },
      { label: "Full-Stack Ad Management", desc: "Deploying and managing data-driven Meta & Google ad campaigns with precision targeting to maximize ROI.", icon: <MousePointer2 size={18} /> },
      { label: "WhatsApp Bulk Ecosystems", desc: "Implementing automated bulk messaging and lead-nurturing systems to keep your business top-of-mind instantly.", icon: <MessageSquare size={18} /> },
    ],
    icon: <Terminal className="text-cyan-400" size={32} />
  },
  {
    name: "Om Ubrani",
    role: "Growth & Creative Director",
    specialty: "MARKET ACQUISITION",
    bio: "The strategic bridge between your brand and the customer. I specialize in the 'Attention Economy'—capturing eyeballs in crowded markets and converting that raw attention into long-term brand trust.",
    details: [
      { label: "Cinematic Content", desc: "Directing and editing scroll-stopping reels and videos that capture attention in the first 3 seconds of the user journey.", icon: <Video size={18} /> },
      { label: "Strategic Outreach", desc: "Managing high-level client acquisition and identifying untapped market opportunities for aggressive brand expansion.", icon: <Cpu size={18} /> },
    ],
    icon: <Video className="text-blue-400" size={32} />
  }
];

export default function Founders() {
  const [selectedFounder, setSelectedFounder] = useState<null | typeof founders[0]>(null);

  useEffect(() => {
    document.body.style.overflow = selectedFounder ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedFounder]);

  return (
    <section id="architects" className="py-32 px-6 max-w-7xl mx-auto scroll-mt-32 relative z-10">
      
      {/* HEADER SECTION WITH DELAYED UNDERLINE */}
      <div className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase text-white leading-none">
            THE <span className="text-cyan-400">ARCHITECTS.</span>
          </h2>
          {/* The Underline Animation */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: false }}
            transition={{ delay: 0.6, duration: 0.8, ease: "circOut" }}
            className="h-[2px] bg-cyan-500 mt-4"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-zinc-600 font-mono text-[10px] tracking-[0.4em] uppercase mt-4"
          >
            Leadership Engineered for Growth
          </motion.p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {founders.map((founder, i) => (
          <motion.div
            key={i}
            layoutId={`card-${founder.name}`}
            onClick={() => setSelectedFounder(founder)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative p-12 bg-zinc-900/10 border border-zinc-800/50 rounded-[3.5rem] cursor-pointer hover:border-cyan-400/60 hover:shadow-[0_0_28px_-12px_rgba(6,182,212,0.22)] transition-all duration-500 overflow-hidden"
          >
            <div className="mb-12 flex justify-between items-start">
              <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 group-hover:border-cyan-500/30 transition-colors">
                {founder.icon}
              </div>
              <span className="px-4 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-[9px] font-mono text-cyan-400 tracking-widest uppercase">
                {founder.specialty}
              </span>
            </div>
            
            <h3 className="text-4xl font-black text-white mb-4 uppercase italic tracking-tighter group-hover:text-cyan-400 transition-colors">
              {founder.name}
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed font-light italic mb-8 line-clamp-2">
              &quot;{founder.bio}&quot;
            </p>
            
            <div className="flex items-center gap-3">
               <div className="h-px flex-1 bg-zinc-800" />
               <span className="text-[9px] font-mono text-cyan-500 uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                 Tap to View Details
               </span>
               <ArrowRight size={12} className="text-cyan-500" />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedFounder && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFounder(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl" 
            />
            
            <motion.div 
              layoutId={`card-${selectedFounder.name}`}
              transition={{ 
                duration: 0.5, 
                ease: [0.22, 1, 0.36, 1] // Premium Cubic Bezier for zero jitter
              }}
              className="relative w-full max-w-4xl max-h-[85vh] bg-zinc-950/40 backdrop-blur-3xl border border-white/10 rounded-[4rem] shadow-2xl flex flex-col overflow-hidden"
            >
              {/* MODAL HEADER */}
              <div className="p-10 md:p-14 pb-8 flex justify-between items-center border-b border-white/5 bg-white/[0.01]">
                <div className="flex items-center gap-8">
                  <div className="p-4 bg-black/40 rounded-2xl border border-white/10 text-cyan-400">
                    {selectedFounder.icon}
                  </div>
                  <div>
                    {/* Non-slanted Title */}
                    <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                      {selectedFounder.name}
                    </h3>
                    <p className="text-cyan-400 font-mono text-[10px] tracking-[0.3em] uppercase mt-2">
                      {selectedFounder.role}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedFounder(null)}
                  className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              {/* MODAL CONTENT - SCROLLABLE */}
              <div className="flex-1 overflow-y-auto p-10 md:p-14 space-y-16 custom-scrollbar">
                <section>
                  <h4 className="text-zinc-600 font-mono text-[9px] uppercase tracking-[0.5em] mb-6">Strategic Mission</h4>
                  {/* Straight, smaller text as requested */}
                  <p className="text-zinc-300 text-xl md:text-2xl leading-relaxed font-normal">
                    {selectedFounder.bio}
                  </p>
                </section>

                <section>
                  <h4 className="text-zinc-600 font-mono text-[9px] uppercase tracking-[0.5em] mb-8">Technical Impact</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedFounder.details.map((detail, idx) => (
                      <div key={idx} className="flex flex-col p-8 bg-white/[0.02] rounded-[2.5rem] border border-white/5">
                        <div className="mb-4 text-cyan-500 opacity-80">
                          {detail.icon}
                        </div>
                        <h5 className="text-white font-bold text-base uppercase tracking-tight mb-2">
                          {detail.label}
                        </h5>
                        <p className="text-zinc-400 text-xs leading-relaxed">
                          {detail.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* MODAL FOOTER */}
              <div className="p-8 md:p-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center bg-black/20 gap-6">
                <div className="flex items-center gap-3 text-zinc-500">
                  <ShieldCheck size={16} className="text-emerald-500" />
                  <span className="text-[9px] font-mono uppercase tracking-[0.3em]">Verified Growth Partner</span>
                </div>
                <button 
                  onClick={() => setSelectedFounder(null)}
                  className="w-full md:w-auto px-12 py-5 bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-cyan-400 transition-all active:scale-95"
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