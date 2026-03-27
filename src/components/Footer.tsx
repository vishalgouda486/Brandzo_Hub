"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
  Activity,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const contactMethods = [
    {
      Icon: Mail,
      href: "mailto:brandzohubb@gmail.com",
      label: "Email Us",
      sub: "brandzohubb@gmail.com",
      border: "border-cyan-400/35",
      glow: "shadow-[0_0_0_1px_rgba(6,182,212,0.18),0_0_18px_rgba(6,182,212,0.12)]",
      hoverGlow: "hover:shadow-[0_0_30px_-12px_rgba(6,182,212,0.28)] hover:border-cyan-400/60",
      iconColor: "text-cyan-400",
    },
    {
      Icon: MessageSquare,
      href: "https://wa.me/917624815112?text=Hi%20Brandzo%20Hub%2C%20I%20want%20to%20know%20more%20about%20your%20services.",
      label: "WhatsApp",
      sub: "Instant Chat",
      border: "border-emerald-400/35",
      glow: "shadow-[0_0_0_1px_rgba(16,185,129,0.18),0_0_18px_rgba(16,185,129,0.12)]",
      hoverGlow: "hover:shadow-[0_0_30px_-12px_rgba(16,185,129,0.28)] hover:border-emerald-400/60",
      iconColor: "text-emerald-400",
    },
    {
      Icon: Phone,
      href: "tel:+917624815112",
      label: "Call Support",
      sub: "Direct Line",
      border: "border-blue-400/35",
      glow: "shadow-[0_0_0_1px_rgba(59,130,246,0.18),0_0_18px_rgba(59,130,246,0.12)]",
      hoverGlow: "hover:shadow-[0_0_30px_-12px_rgba(59,130,246,0.28)] hover:border-blue-400/60",
      iconColor: "text-blue-400",
    },
  ];

  const directory = [
    { name: "Services", href: "#services" },
    { name: "Works", href: "#work" },
    { name: "Architects", href: "#architects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer
      id="contact"
      className="relative pt-32 pb-10 px-6 bg-black border-t border-zinc-900 overflow-hidden"
    >
      {/* Ambient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/[0.03] blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* LEFT SIDE */}
          <div className="lg:col-span-8">
            <div className="relative mb-14">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.25 }}
              >
                <motion.h2
                  initial={{
                    letterSpacing: "0.2em",
                    filter: "blur(18px)",
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    letterSpacing: "-0.02em",
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1.15,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.15,
                  }}
                  viewport={{ once: false, amount: 0.35 }}
                  className="text-6xl sm:text-7xl md:text-[11rem] font-black tracking-tighter leading-[0.82] text-white uppercase italic drop-shadow-[0_0_18px_rgba(255,255,255,0.04)]"
                >
                  LET&apos;S <br />
                  <span className="text-cyan-400">SYNC.</span>
                </motion.h2>

                {/* Micro status pills */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-full">
                    <Activity size={10} className="text-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                      Systems: Optimal
                    </span>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-full">
                    <ShieldCheck size={10} className="text-cyan-500" />
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                      End-to-End Encrypted
                    </span>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-full">
                    <Sparkles size={10} className="text-blue-400" />
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                      Fast Response Workflow
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={i}
                  href={method.href}
                  initial={{
                    opacity: 0,
                    y: 50,
                    scale: 0.96,
                    filter: "blur(8px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 0.85,
                    delay: 0.2 + i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: false, amount: 0.18 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`group relative p-6 md:p-7 bg-zinc-950 border rounded-[2.2rem] transition-all duration-500 overflow-hidden ${method.border} ${method.glow} ${method.hoverGlow}`}
                >
                  {/* Ambient layer */}
                  <div className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent blur-2xl" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`p-3 rounded-2xl bg-zinc-900 border border-white/5 ${method.iconColor}`}
                      >
                        <method.Icon size={22} />
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="text-zinc-500 group-hover:text-white transition-colors"
                      />
                    </div>

                    <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-2">
                      {method.label}
                    </div>

                    <div className="text-sm md:text-base font-bold text-zinc-300 group-hover:text-white transition-colors break-all">
                      {method.sub}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE NAV */}
          <div className="lg:col-span-4 lg:pl-20 flex flex-col justify-between">
            <div className="pt-6 lg:pt-8">
              <h4 className="text-zinc-700 font-mono text-[10px] uppercase tracking-[0.5em] mb-8">
                Navigation
              </h4>

              <ul className="space-y-4">
                {directory.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + i * 0.08,
                    }}
                    viewport={{ once: false, amount: 0.4 }}
                    whileHover={{ x: 10 }}
                  >
                    <a
                      href={item.href}
                      className="group flex items-center gap-4 text-2xl md:text-3xl font-black text-zinc-400 hover:text-cyan-400 hover:brightness-125 transition-all italic uppercase tracking-tighter"
                    >
                      {item.name}
                      <ArrowUpRight
                        size={22}
                        className="opacity-100 md:opacity-0 -translate-x-0 md:-translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all"
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-28 md:mt-32 pt-8 md:pt-10 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-6">
          <p className="text-[11px] md:text-[12px] font-mono text-zinc-600 uppercase tracking-[0.25em] text-center md:text-left">
            © 2026 BRANDZO HUB. ALL RIGHTS RESERVED.
          </p>

          <p className="text-[11px] md:text-[12px] font-mono text-zinc-800 uppercase tracking-widest text-center md:text-right">
            Digital Growth Engine // v2.0
          </p>
        </div>
      </div>
    </footer>
  );
}