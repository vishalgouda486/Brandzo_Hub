"use client";

import { motion } from "framer-motion";

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
  return (
    <div className="relative w-full py-20 overflow-hidden bg-[#050505] border-y border-zinc-900">
      {/* Subtle Gradient Overlays to hide edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {/* We double the array to create a seamless loop */}
        {[...services, ...services].map((service, index) => (
          <div
            key={index}
            className="flex items-center px-10 text-4xl md:text-6xl font-black tracking-tighter text-zinc-500 hover:text-cyan-400 transition-colors cursor-default"
          >
            <span className="mr-8 text-cyan-900">•</span>
            {service.toUpperCase()}
          </div>
        ))}
      </motion.div>
    </div>
  );
}