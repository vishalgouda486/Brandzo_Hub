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
      border: "border-cyan-400/28",
      glow: "shadow-[0_0_0_1px_rgba(6,182,212,0.14),0_0_18px_rgba(6,182,212,0.10)]",
      hoverGlow: "hover:shadow-[0_0_44px_-10px_rgba(6,182,212,0.34)] hover:border-cyan-400/55",
      iconColor: "text-cyan-400",
    },
    {
      Icon: MessageSquare,
      href: "https://wa.me/917624815112?text=Hi%20Brandzo%20Hub%2C%20I%20want%20to%20know%20more%20about%20your%20services.",
      label: "WhatsApp",
      sub: "Chat With Us",
      border: "border-emerald-400/28",
      glow: "shadow-[0_0_0_1px_rgba(16,185,129,0.14),0_0_18px_rgba(16,185,129,0.10)]",
      hoverGlow: "hover:shadow-[0_0_44px_-10px_rgba(16,185,129,0.34)] hover:border-emerald-400/55",
      iconColor: "text-emerald-400",
    },
    {
      Icon: Phone,
      href: "tel:+917624815112",
      label: "Call Support",
      sub: "+91 76248 15112",
      border: "border-blue-400/28",
      glow: "shadow-[0_0_0_1px_rgba(59,130,246,0.14),0_0_18px_rgba(59,130,246,0.10)]",
      hoverGlow: "hover:shadow-[0_0_44px_-10px_rgba(59,130,246,0.34)] hover:border-blue-400/55",
      iconColor: "text-blue-400",
    },
  ];

  const directory = [
    { name: "Services", href: "#services" },
    { name: "Sample Work", href: "#work" },
    { name: "Team", href: "#architects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer
      id="contact"
      className="relative pt-32 pb-10 px-6 bg-black border-t border-zinc-900 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/[0.03] blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <div className="relative mb-14">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.78 }}
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
                    duration: 1,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: false, amount: 0.8 }}
                  className="text-6xl sm:text-7xl md:text-[11rem] font-black tracking-tighter leading-[0.82] text-white uppercase italic"
                >
                  LET&apos;S <br />
                  <span className="text-cyan-400">GROW.</span>
                </motion.h2>

                <div className="flex flex-wrap gap-3 mt-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-full">
                    <Activity size={10} className="text-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest">
                      24/7 Support Ready
                    </span>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-full">
                    <ShieldCheck size={10} className="text-cyan-500" />
                    <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest">
                      Reliable Long-Term Management
                    </span>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-full">
                    <Sparkles size={10} className="text-blue-400" />
                    <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest">
                      Fast Communication Workflow
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

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
                    duration: 0.75,
                    delay: 0.18 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: false, amount: 0.72 }}
                  whileHover={{ y: -7, scale: 1.03 }}
                  className={`group relative p-6 md:p-7 bg-zinc-950 border rounded-[2.2rem] transition-all duration-150 overflow-hidden ${method.border} ${method.glow} ${method.hoverGlow}`}
                >
                  <div className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
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
                        className="text-zinc-500 group-hover:text-white transition-colors duration-150"
                      />
                    </div>

                    <div className="text-[10px] font-mono text-zinc-200 uppercase tracking-widest mb-2">
                      {method.label}
                    </div>

                    <div className="text-sm md:text-base font-bold text-zinc-300 group-hover:text-white transition-colors duration-150 break-all">
                      {method.sub}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 lg:pl-20 flex flex-col justify-between">
            <div className="pt-6 lg:pt-8">
              <h4 className="text-zinc-200 font-mono text-xs uppercase tracking-[0.35em] mb-8">
                Navigation
              </h4>

              <ul className="space-y-4">
                {directory.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.14 + i * 0.05,
                    }}
                    viewport={{ once: false, amount: 0.75 }}
                    whileHover={{ x: 10 }}
                  >
                    <a
                      href={item.href}
                      className="group flex items-center gap-4 text-2xl md:text-3xl font-black text-zinc-400 hover:text-cyan-400 transition-all duration-100 italic uppercase tracking-tighter"
                    >
                      {item.name}
                      <ArrowUpRight
                        size={22}
                        className="opacity-100 md:opacity-0 -translate-x-0 md:-translate-x-3 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-100"
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-14 border-t border-zinc-900 pt-8">
                <p className="text-zinc-200 font-mono text-xs uppercase tracking-[0.35em] mb-4">
                  Brand Positioning
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Brandzo Hub builds and manages websites, ads, automation, SEO,
                  content, and business growth systems for modern brands.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-28 md:mt-32 pt-8 md:pt-10 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-6">
          <p className="text-[11px] md:text-[12px] font-mono text-zinc-500 uppercase tracking-[0.25em] text-center md:text-left">
            © 2026 BRANDZO HUB. ALL RIGHTS RESERVED.
          </p>

          <p className="text-[11px] md:text-[12px] font-mono text-zinc-700 uppercase tracking-widest text-center md:text-right">
            Websites • Ads • SEO • Automation • Support
          </p>
        </div>
      </div>
    </footer>
  );
}