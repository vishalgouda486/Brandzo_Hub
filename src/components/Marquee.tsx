"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  "Website Development",
  "Website Maintenance & Updates",
  "Meta Ads Management",
  "Google Ads Campaigns",
  "YouTube Ads",
  "WhatsApp Automation",
  "Bulk WhatsApp Messaging",
  "Local SEO (GMB)",
  "Content Creation & Reels",
  "Social Media Management",
  "Hosting, Domain & SSL",
  "Lead Tracking & Reporting",
];

export default function Marquee() {
  const [duration, setDuration] = useState(42);

  useEffect(() => {
    const check = () => {
      setDuration(window.innerWidth < 768 ? 26 : 42);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const marqueeItems = [...services, ...services, ...services, ...services];

  return (
    <section className="relative w-full py-20 overflow-hidden bg-[#050505] border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-zinc-300 font-mono text-xs uppercase tracking-[0.35em]">
          Full Service Capability Strip
        </p>
      </div>

      <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

      <motion.div
        className="flex whitespace-nowrap w-max"
        animate={{ x: ["0%", "-25%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
        }}
      >
        {marqueeItems.map((service, index) => (
          <div
            key={index}
            className="flex items-center px-8 md:px-10 text-3xl md:text-5xl font-black tracking-tighter text-cyan-400 md:text-zinc-500 md:hover:text-cyan-400 transition-all duration-200 italic uppercase"
          >
            <span className="mr-8 text-cyan-900">•</span>
            {service.toUpperCase()}
          </div>
        ))}
      </motion.div>
    </section>
  );
}