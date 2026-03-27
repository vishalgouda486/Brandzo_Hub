"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  "WhatsApp Bulk Management",
  "Meta Ads Optimization",
  "Google Ads Strategy",
  "Local SEO Dominance",
  "GMP SEO",
  "Content Creation",
  "Promo Reels",
  "B2B Management",
  "Social Media Growth",
];

export default function Marquee() {
  const [duration, setDuration] = useState(20);

  useEffect(() => {
    const check = () => {
      setDuration(window.innerWidth < 768 ? 8 : 20);
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="relative w-full py-20 overflow-hidden bg-[#050505] border-y border-zinc-900">
      {/* Edge Fade */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
        }}
      >
        {[...services, ...services].map((service, index) => (
          <div
            key={index}
            className="flex items-center px-10 text-4xl md:text-6xl font-black tracking-tighter text-cyan-400 md:text-zinc-500 md:hover:text-cyan-400 md:hover:brightness-100 transition-all duration-300 cursor-default"
          >
            <span className="mr-8 text-cyan-900">•</span>
            {service.toUpperCase()}
          </div>
        ))}
      </motion.div>
    </div>
  );
}