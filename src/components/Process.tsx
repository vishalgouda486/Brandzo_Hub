"use client";

import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    id: "01",
    title: "META & GOOGLE",
    bgText: "AD SYNC",
    color: "text-cyan-500",
    label: "The Foundation",
    description: "We synchronize your ad spend across platforms, eliminating waste and outbidding competitors through high-intent data mapping."
  },
  {
    id: "02",
    title: "SEARCH CLUSTERS",
    bgText: "SEO ARMOR",
    color: "text-blue-500",
    label: "Market Dominance",
    description: "Localized GMB architecture and content clusters that build an impenetrable shield around your local market search results."
  },
  {
    id: "03",
    title: "VISUAL FUEL",
    bgText: "REELS PRO",
    color: "text-purple-500",
    label: "Attention Engine",
    description: "High-energy promo reels and cinematic short-form content designed to stop the scroll and build brand authority."
  },
  {
    id: "04",
    title: "B2B SYSTEMS",
    bgText: "WA AUTO",
    color: "text-emerald-500", 
    label: "The Close",
    description: "Automated outreach pipelines that land your value proposition directly in the hands of decision-makers while you sleep."
  }
];

export default function Process() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        snap: {
          snapTo: 1 / (SERVICES.length - 1), 
          duration: { min: 0.2, max: 0.3 },  
          delay: 0,                         
          ease: "power2.inOut"              
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    /* ADDED ID="SERVICES" AND SCROLL-MT-20 HERE */
    <div 
      id="services" 
      ref={containerRef} 
      className="bg-black border-t border-zinc-900 scroll-mt-20"
    >
      {SERVICES.map((service, index) => (
        <section 
          key={index} 
          className="relative h-screen w-full flex items-center justify-center overflow-hidden border-b border-zinc-900/50"
        >
          {/* BACKGROUND TEXT */}
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            whileInView={{ opacity: 0.16, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false, amount: 0.3 }}
            className={`text-[15vw] font-black ${service.color} absolute select-none tracking-tighter uppercase whitespace-nowrap z-0 inline-block scale-x-110 md:scale-x-125 blur-[0.2px] drop-shadow-[0_0_18px_rgba(255,255,255,0.06)]`}
          >
            {service.bgText}
          </motion.h2>

          {/* CONTENT CARD */}
          <motion.div 
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false, amount: 0.4 }}
            className="relative z-10 text-center px-6 before:absolute before:inset-[-20px] before:-z-10 before:bg-cyan-500/5 before:blur-3xl before:rounded-full"
          >
            <span className={`${service.color} font-mono text-[10px] md:text-xs tracking-[0.6em] mb-6 block uppercase`}>
              {service.label}
            </span>
            <h3 className="text-5xl md:text-8xl font-black mb-6 italic uppercase tracking-tighter text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.06)]">
              {service.id}. {service.title}
            </h3>
            <p className="text-zinc-500 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              {service.description}
            </p>
          </motion.div>

          {/* SCROLL INDICATOR */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20">
             <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
          </div>
        </section>
      ))}
    </div>
  );
}