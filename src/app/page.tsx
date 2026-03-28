"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Zap,
  Globe,
  BarChart3,
  Rocket,
  ShieldCheck,
  MessageSquare,
  Wrench,
  MousePointer2,
  ArrowRight,
  CircleCheckBig,
} from "lucide-react";
import Founders from "@/components/Founders";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import Process from "@/components/Process";
import Work from "@/components/Work";
import "./globals.css";

function Typing({ text, start }: { text: string; start: boolean }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!start) return;
    setDisplayed("");

    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 52);

    return () => clearInterval(interval);
  }, [text, start]);

  return (
    <>
      {displayed}
      <span className="animate-pulse text-cyan-400">|</span>
    </>
  );
}

function TypewriterText() {
  const text =
    "We build and manage complete online growth systems for businesses.";
  const [start, setStart] = useState(false);

  return (
    <motion.h2
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.72 }}
      onViewportEnter={() => setStart(true)}
      transition={{ duration: 0.8, delay: 0.18 }}
      className="mt-20 text-[1.08rem] sm:text-[1.2rem] md:text-[1.8rem] lg:text-[2.25rem] font-medium tracking-tight leading-[1.15] uppercase text-white max-w-4xl"
    >
      <Typing text={text} start={start} />
    </motion.h2>
  );
}

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  } as const;

  const letterAnimation = {
    initial: { letterSpacing: "-0.05em", opacity: 1 },
    hover: {
      letterSpacing: "0.05em",
      transition: {
        duration: 0.8,
        delay: 0.35,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  const echoAnimation: Variants = {
    initial: { opacity: 0, x: 0, skewX: 0 },
    hover: {
      opacity: [0, 0.28, 0],
      x: [0, 60, 100],
      skewX: [0, -30, -60],
      transition: {
        duration: 0.9,
        delay: 0.45,
        ease: "easeOut",
      },
    },
  };

  const bentoItems = [
    {
      title: "Websites",
      icon: Rocket,
      color:
        "hover:border-cyan-400 md:hover:border-cyan-400 border-cyan-400/35",
      shadow:
        "shadow-[0_0_0_1px_rgba(6,182,212,0.14),0_0_18px_rgba(6,182,212,0.10)] hover:shadow-[0_0_44px_-10px_rgba(6,182,212,0.30)]",
      desc: "Fast, premium websites built to convert visitors into real enquiries.",
    },
    {
      title: "Ads & Traffic",
      icon: MousePointer2,
      color:
        "hover:border-blue-400 md:hover:border-blue-400 border-blue-400/35",
      shadow:
        "shadow-[0_0_0_1px_rgba(59,130,246,0.14),0_0_18px_rgba(59,130,246,0.10)] hover:shadow-[0_0_44px_-10px_rgba(59,130,246,0.30)]",
      desc: "Google, Meta, and YouTube ads designed to bring high-intent leads.",
    },
    {
      title: "SEO & Visibility",
      icon: Globe,
      color:
        "hover:border-purple-400 md:hover:border-purple-400 border-purple-400/30",
      shadow:
        "shadow-[0_0_0_1px_rgba(168,85,247,0.12),0_0_18px_rgba(168,85,247,0.10)] hover:shadow-[0_0_44px_-10px_rgba(168,85,247,0.28)]",
      desc: "Local SEO and Google Business Profile optimization that improves discoverability.",
    },
    {
      title: "Automation",
      icon: MessageSquare,
      color:
        "hover:border-white/35 md:hover:border-white/35 border-white/12",
      shadow:
        "shadow-[0_0_0_1px_rgba(255,255,255,0.07),0_0_18px_rgba(255,255,255,0.05)] hover:shadow-[0_0_44px_-10px_rgba(255,255,255,0.18)]",
      desc: "WhatsApp workflows, bulk messaging, lead tracking, and follow-up systems.",
    },
  ];

  const trustPoints = [
    {
      icon: ShieldCheck,
      title: "Long-Term Support",
      desc: "We don’t disappear after launch. We stay available for updates, fixes, and ongoing management.",
    },
    {
      icon: Wrench,
      title: "Managed End-to-End",
      desc: "From domain, hosting, SSL, and website setup to ads, automation, and optimization — handled in one place.",
    },
    {
      icon: BarChart3,
      title: "Lead Tracking & Reports",
      desc: "We help organize enquiries, monitor leads, and keep business growth measurable.",
    },
    {
      icon: Zap,
      title: "Fast Execution",
      desc: "Quick communication, reliable delivery, and 24/7 availability when your business needs support.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-cyan-500/30">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-cyan-900/10 rounded-full blur-[120px]" />
        <div className="absolute top-[18%] right-[-12%] w-[45%] h-[45%] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="px-6 py-20 max-w-7xl mx-auto relative z-10">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* HERO */}
          <section className="mb-32 mt-10 md:mt-16 min-h-[88vh] flex flex-col justify-center">
            <motion.span
              variants={item}
              className="text-cyan-400 font-mono text-[11px] uppercase tracking-[0.55em] mb-8 block"
            >
              Growth Systems • Websites • Ads • SEO • Automation
            </motion.span>

            <motion.div
              className="relative cursor-pointer w-fit group"
              initial="initial"
              whileHover="hover"
              animate="hover"
            >
              <motion.h1
                variants={echoAnimation}
                className="absolute inset-0 text-7xl md:text-[11rem] font-black leading-[0.8] tracking-tighter italic uppercase pointer-events-none text-cyan-400 opacity-30 blur-[0.3px]"
              >
                Brandzo <br /> Hub
              </motion.h1>

              <motion.h1
                variants={letterAnimation}
                className="relative text-7xl md:text-[11rem] font-black leading-[0.8] tracking-tighter italic uppercase mb-6 z-10"
              >
                Brandzo <br />
                <span className="text-cyan-400">Hub</span>
                <span className="text-white">.</span>
              </motion.h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.72 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-base md:text-xl text-zinc-400 tracking-[0.22em] md:tracking-[0.28em] uppercase italic mt-8"
            >
              Your Digital{" "}
              <span className="text-white font-semibold">Growth Engine</span>
            </motion.p>

            <TypewriterText />

            <motion.p
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.72 }}
              transition={{ duration: 0.8, delay: 0.32 }}
              className="mt-8 text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl"
            >
              From high-converting websites and paid ads to WhatsApp automation,
              Local SEO, content creation, hosting, SSL, and long-term support —
              Brandzo Hub helps businesses attract, convert, and manage leads
              consistently without depending on multiple teams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.72 }}
              transition={{ duration: 0.75, delay: 0.42 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/917624815112?text=Hi%20Brandzo%20Hub%2C%20I%20want%20to%20book%20a%20free%20consultation."
                className="relative px-8 py-4 rounded-full border border-cyan-400 text-cyan-400 font-bold text-[11px] uppercase tracking-[0.22em] overflow-hidden group transition-all duration-200 text-center"
              >
                <span className="relative z-10 group-hover:text-black transition duration-200">
                  Book Free Consultation
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0 bg-cyan-400 group-hover:h-full transition-all duration-300 ease-out" />
              </a>

              <a
                href="#services"
                className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-bold text-[11px] uppercase tracking-[0.22em] hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200 text-center"
              >
                Explore Services
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.72 }}
              transition={{ duration: 0.75, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {[
                "Website Development",
                "Google & Meta Ads",
                "WhatsApp Automation",
                "Local SEO / GMB SEO",
                "Content & Reels",
                "Long-Term Management",
              ].map((tag, i) => (
                <div
                  key={i}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-300"
                >
                  {tag}
                </div>
              ))}
            </motion.div>
          </section>

          {/* TRUST / POSITIONING */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-40 border-t border-zinc-900/50 pt-16">
            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.76 }}
              transition={{ duration: 0.85, delay: 0.18 }}
            >
              <p className="text-zinc-200 font-mono text-xs uppercase mb-6 tracking-[0.35em]">
                What Makes Us Different
              </p>
              <p className="text-2xl md:text-[2rem] text-zinc-200 font-light leading-relaxed">
                Most teams only <span className="text-white font-medium">build and leave.</span>{" "}
                We build, run, update, optimize, and stay consistent so your
                business never looks abandoned online.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.76 }}
              transition={{ duration: 0.85, delay: 0.28 }}
              className="flex items-end"
            >
              <div className="border-l border-cyan-500/30 pl-6">
                <p className="text-sm text-zinc-200 font-mono leading-relaxed uppercase tracking-[0.18em]">
                  Websites • Ads • SEO • WhatsApp • Content • Hosting • Reporting • Ongoing Support
                </p>
                <p className="mt-5 text-zinc-400 text-sm leading-relaxed max-w-xl">
                  Brandzo Hub is built for businesses that want one reliable team
                  to handle the entire online growth system instead of managing
                  multiple freelancers or agencies.
                </p>
              </div>
            </motion.div>
          </section>

          {/* BENTO GRID */}
          <section className="mb-28">
            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.76 }}
              transition={{ duration: 0.85, delay: 0.18 }}
              className="flex items-center justify-between gap-6 mb-10 flex-wrap"
            >
              <div>
                <p className="text-zinc-200 font-mono text-xs uppercase tracking-[0.35em] mb-3">
                  Core Growth Stack
                </p>
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase">
                  One team. <span className="text-cyan-400">Everything managed.</span>
                </h3>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {bentoItems.map((box, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 90, scale: 0.94, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  viewport={{ once: false, amount: 0.72 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.18 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className={`h-full bg-zinc-950 border rounded-[2.5rem] p-10 group transition-all duration-150 cursor-pointer ${box.color} ${box.shadow}`}
                >
                  <box.icon
                    className="text-zinc-400 mb-8 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-300"
                    size={28}
                  />
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">
                    {box.title}
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-150">
                    {box.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* WHY CHOOSE US */}
          <section className="mb-28 border-t border-zinc-900/50 pt-16">
            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.76 }}
              transition={{ duration: 0.85, delay: 0.18 }}
              className="mb-10"
            >
              <p className="text-zinc-200 font-mono text-xs uppercase tracking-[0.35em] mb-3">
                Why Businesses Choose Brandzo Hub
              </p>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase">
                Built for <span className="text-cyan-400">trust, speed, and consistency.</span>
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {trustPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 70, scale: 0.94, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  viewport={{ once: false, amount: 0.72 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.18 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="bg-zinc-950 border border-cyan-400/20 rounded-[2rem] p-8 shadow-[0_0_0_1px_rgba(6,182,212,0.12),0_0_18px_rgba(6,182,212,0.08)] hover:border-cyan-400/35 hover:shadow-[0_0_44px_-10px_rgba(6,182,212,0.30)] transition-all duration-150"
                >
                  <point.icon size={24} className="text-cyan-400 mb-6" />
                  <h4 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {point.title}
                  </h4>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {point.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* WHO WE HELP */}
          <section className="mb-28 border-t border-zinc-900/50 pt-16">
            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.76 }}
              transition={{ duration: 0.85, delay: 0.18 }}
              className="max-w-5xl"
            >
              <p className="text-zinc-200 font-mono text-xs uppercase tracking-[0.35em] mb-3">
                Who We Work Best With
              </p>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase mb-6">
                Built for <span className="text-cyan-400">service businesses that want real growth.</span>
              </h3>
              <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-light">
                Brandzo Hub is ideal for local businesses, clinics, salons, real estate
                professionals, boutiques, consultants, service brands, and businesses
                that want more enquiries, better online presence, and consistent growth support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              {[
                "Local Businesses",
                "Personal Brands & Consultants",
                "Clinics & Professional Services",
                "Salons & Beauty Brands",
                "Real Estate & Lead-Based Businesses",
                "Businesses Needing Ongoing Management",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60, scale: 0.96, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  viewport={{ once: false, amount: 0.72 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.14 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="rounded-[2rem] border border-white/10 bg-zinc-950/80 px-6 py-6 text-zinc-200 text-sm md:text-base font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_0_18px_rgba(255,255,255,0.04)] hover:border-cyan-400/25 hover:shadow-[0_0_40px_-12px_rgba(6,182,212,0.24)] transition-all duration-150"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </section>

          {/* WHY NOW CTA BAND */}
          <section className="mb-10 border-t border-zinc-900/50 pt-16">
            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.76 }}
              transition={{ duration: 0.85, delay: 0.18 }}
              className="rounded-[2.5rem] border border-cyan-400/18 bg-zinc-950/90 p-8 md:p-12 shadow-[0_0_0_1px_rgba(6,182,212,0.12),0_0_24px_rgba(6,182,212,0.08)]"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="max-w-3xl">
                  <p className="text-zinc-200 font-mono text-xs uppercase tracking-[0.35em] mb-4">
                    Built For Serious Businesses
                  </p>
                  <h3 className="text-3xl md:text-5xl font-black tracking-tighter italic uppercase text-white leading-tight mb-4">
                    If your business needs <span className="text-cyan-400">more enquiries, better presence, and one reliable team</span> — Brandzo Hub is built for that.
                  </h3>
                  <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                    We don’t just make things look good. We build and manage the systems that help businesses get found, get trusted, and get leads.
                  </p>
                </div>

                <div className="flex flex-col gap-3 min-w-[260px]">
                  {[
                    "Website + Growth Setup",
                    "Ads + Lead Systems",
                    "Support + Management",
                  ].map((point, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3"
                    >
                      <CircleCheckBig size={18} className="text-cyan-400 shrink-0" />
                      <span className="text-sm text-zinc-200">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>
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