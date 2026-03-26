"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, ArrowUpRight, ShieldCheck, Activity } from "lucide-react";

export default function Footer() {
  const contactMethods = [
    { 
      Icon: Mail, 
      href: "mailto:brandzohubb@gmail.com", 
      label: "Email Us", 
      sub: "brandzohubb@gmail.com",
      color: "hover:border-cyan-500/50"
    },
    { 
      Icon: MessageSquare, 
      href: "https://wa.me/917624815112", 
      label: "WhatsApp", 
      sub: "Instant Chat",
      color: "hover:border-emerald-500/50"
    },
    { 
      Icon: Phone, 
      href: "tel:+917624815112", 
      label: "Call Support", 
      sub: "Direct Line",
      color: "hover:border-blue-500/50"
    }
  ];

  const directory = [
    { name: "Services", href: "#services" },
    { name: "Works", href: "#work" },
    { name: "Architects", href: "#architects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer id="contact" className="relative pt-32 pb-10 px-6 bg-black border-t border-zinc-900 overflow-hidden">
      
      {/* BACKGROUND AMBIENCE */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: THE HERO TEXT AREA */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* THE MIND-BLOWING REVEAL */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                className="mb-12"
              >
                <motion.h2 
                  initial={{ letterSpacing: "0.2em", filter: "blur(20px)", opacity: 0 }}
                  whileInView={{ letterSpacing: "-0.02em", filter: "blur(0px)", opacity: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="text-7xl md:text-[11rem] font-black tracking-tighter leading-[0.8] text-white uppercase italic"
                >
                  LET&apos;S <br />
                  <span className="text-cyan-400">SYNC.</span>
                </motion.h2>
                
                {/* FLOATING STATUS (Kept it subtle and high-tech) */}
                <div className="flex gap-4 mt-6">
                  <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900/50 border border-zinc-800 rounded-full">
                    <Activity size={10} className="text-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Systems: Optimal</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900/50 border border-zinc-800 rounded-full">
                    <ShieldCheck size={10} className="text-cyan-500" />
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">End-to-End Encrypted</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* NEW ACTION BUTTONS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={i}
                  href={method.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`group p-6 bg-zinc-900/20 border border-zinc-800/50 rounded-[2rem] transition-all duration-300 ${method.color}`}
                >
                  <method.Icon size={24} className="text-zinc-400 group-hover:text-white mb-4 transition-colors" />
                  <div className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-1">{method.label}</div>
                  <div className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors">{method.sub}</div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* RIGHT: NECESSARY DIRECTORY */}
          <div className="lg:col-span-4 lg:pl-20 flex flex-col justify-between">
            <div className="pt-8">
              <h4 className="text-zinc-700 font-mono text-[10px] uppercase tracking-[0.5em] mb-8">Navigation</h4>
              <ul className="space-y-4">
                {directory.map((item, i) => (
                  <motion.li key={i} whileHover={{ x: 10 }}>
                    <a 
                      href={item.href} 
                      className="group flex items-center gap-4 text-3xl font-black text-zinc-400 hover:text-cyan-400 transition-all italic uppercase tracking-tighter"
                    >
                      {item.name}
                      <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT AREA */}
        <div className="mt-32 pt-10 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
             <p className="text-[12px] font-mono text-zinc-600 uppercase tracking-[0.3em]">
               © 2026 BRANDZO HUB. ALL RIGHTS RESERVED.
             </p>
          </div>
          <div className="flex gap-6">
            <p className="text-[12px] font-mono text-zinc-800 uppercase tracking-widest">
              Digital Growth Engine // v2.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}