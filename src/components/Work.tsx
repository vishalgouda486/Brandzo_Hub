"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layout, Smartphone, Search, Zap, MousePointer2, MessageSquare } from "lucide-react";

const CONCEPTS = [
  {
    title: "The Lead-Magnet Engine",
    type: "Web Design",
    tech: "High-Conversion Architecture",
    description: "A website built specifically to turn visitors into callers. We removed the clutter so your customers find the 'Book Now' button in under 3 seconds.",
    metric: "40% More Inquiries",
    icon: <Layout size={20} />,
    color: "from-cyan-500/20",
    link: "#"
  },
  {
    title: "Google Search Shield",
    type: "SEO / GMB",
    tech: "Local Market Dominance",
    description: "We make your business the first thing people see when searching 'near me'. It's like having a digital billboard on the busiest street in town.",
    metric: "Top 3 Ranking",
    icon: <Search size={20} />,
    color: "from-blue-500/20",
    link: "#"
  },
  {
    title: "The 'Scroll-Stop' Reels",
    type: "Content Creation",
    tech: "Attention Engineering",
    description: "Cinematic short videos designed to grab attention instantly. We turn boring services into viral content that people actually want to watch.",
    metric: "2.5x Engagement",
    icon: <Zap size={20} />,
    color: "from-purple-500/20",
    link: "#"
  },
  {
    title: "Zero-Waste Ad Sync",
    type: "Meta & Google Ads",
    tech: "Smart Budget Allocation",
    description: "Stop throwing money at ads that don't work. We sync your Meta and Google ads so they only show up for people ready to buy right now.",
    metric: "Lower Lead Cost",
    icon: <MousePointer2 size={20} />,
    color: "from-emerald-500/20",
    link: "#"
  },
  {
    title: "WhatsApp Autopilot",
    type: "B2B Automation",
    tech: "Instant Outreach",
    description: "A system that automatically messages your leads the second they sign up. It's like having a 24/7 sales assistant who never sleeps.",
    metric: "Instant Response",
    icon: <MessageSquare size={20} />,
    color: "from-green-500/20",
    link: "#"
  },
  {
    title: "Mobile-First Dominance",
    type: "UI/UX Strategy",
    tech: "Mobile Optimization",
    description: "90% of your clients are on their phones. We build your digital presence to look and work perfectly on a thumb-scroll, ensuring no lost sales.",
    metric: "99% Mobile Score",
    icon: <Smartphone size={20} />,
    color: "from-orange-500/20",
    link: "#"
  }
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 bg-[#050505] scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase text-white"
          >
            PROVEN <span className="text-cyan-400">BLUEPRINTS.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4 }}
            className="text-zinc-500 font-mono text-[10px] tracking-[0.4em] mt-4 uppercase"
          >
            Internal Stress-Tests // Ready for Deployment
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONCEPTS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1, 
                ease: [0.215, 0.61, 0.355, 1] 
              }}
              viewport={{ once: false, amount: 0.1 }}
              className="group relative bg-zinc-900/10 border border-zinc-800/50 rounded-[2.5rem] overflow-hidden hover:border-cyan-500/40 transition-all duration-500"
            >
              <div className={`h-48 w-full bg-gradient-to-br ${item.color} to-transparent relative flex items-center justify-center overflow-hidden`}>
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
                  <path d="M0 80 Q 25 20 50 50 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400" />
                </svg>
                
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  viewport={{ once: false }}
                  className="relative z-20 text-center"
                >
                  <div className="text-4xl font-black text-white tracking-tighter mb-1 uppercase italic">
                    {item.metric}
                  </div>
                  <div className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest">
                    Performance Increase
                  </div>
                </motion.div>

                <div className="absolute top-6 right-6 z-20">
                  <div className="p-3 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={16} />
                  </div>
                </div>
              </div>

              <div className="p-8 relative z-20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-zinc-800 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                  {item.description}
                </p>

                <div className="pt-6 border-t border-zinc-800/50 flex justify-between items-center">
                   <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
                     Strategy: {item.tech}
                   </span>
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}