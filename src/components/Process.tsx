"use client";

import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    id: "01",
    title: "BUILD YOUR FOUNDATION",
    bgText: "WEBSITE",
    color: "text-cyan-500",
    label: "Step 1",
    description:
      "We create fast, mobile-optimized websites with hosting, domain setup, SSL, and conversion-focused structure designed to turn visitors into enquiries.",
  },
  {
    id: "02",
    title: "BRING TRAFFIC",
    bgText: "ADS",
    color: "text-blue-500",
    label: "Step 2",
    description:
      "We run and manage Meta Ads, Google Ads, and YouTube campaigns that bring high-intent customers directly to your business.",
  },
  {
    id: "03",
    title: "CAPTURE & CONVERT",
    bgText: "WHATSAPP",
    color: "text-emerald-500",
    label: "Step 3",
    description:
      "We set up WhatsApp automation, bulk messaging, and lead handling systems so every enquiry gets an instant and professional response.",
  },
  {
    id: "04",
    title: "INCREASE VISIBILITY",
    bgText: "SEO",
    color: "text-purple-500",
    label: "Step 4",
    description:
      "We optimize your Google Business Profile and local SEO so customers searching nearby can easily find and trust your business.",
  },
  {
    id: "05",
    title: "BUILD YOUR BRAND",
    bgText: "CONTENT",
    color: "text-pink-500",
    label: "Step 5",
    description:
      "We create reels, posts, and social content that improves your brand presence and keeps your business active and engaging online.",
  },
  {
    id: "06",
    title: "MANAGE & SCALE",
    bgText: "SUPPORT",
    color: "text-orange-500",
    label: "Step 6",
    description:
      "We continue managing, updating, optimizing, and supporting your systems long-term so your business grows consistently without interruption.",
  },
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
          snapTo: 1 / (STEPS.length - 1),
          duration: { min: 0.2, max: 0.3 },
          delay: 0,
          ease: "power2.inOut",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="services" ref={containerRef} className="bg-black border-t border-zinc-900 scroll-mt-20">
      {STEPS.map((step, index) => (
        <section
          key={index}
          className="relative h-screen w-full flex items-center justify-center overflow-hidden border-b border-zinc-900/50"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 0.28, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.62 }}
            transition={{ duration: 1.1, delay: 0.42 }}
            className={`text-[24vw] md:text-[18vw] font-black ${step.color} absolute inset-0 flex items-center justify-center select-none uppercase z-0 tracking-[-0.06em] leading-none`}
          >
            {step.bgText}
          </motion.h2>

          <motion.div
            initial={{ y: 70, opacity: 0, filter: "blur(8px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.62 }}
            transition={{ duration: 0.95, delay: 0.58 }}
            className="relative z-10 text-center px-6 max-w-5xl"
          >
            <span className={`${step.color} font-mono text-sm tracking-[0.35em] mb-6 block uppercase`}>
              {step.label}
            </span>

            <h3 className="text-4xl md:text-7xl lg:text-8xl font-black mb-6 italic uppercase tracking-tighter text-white">
              {step.id}. {step.title}
            </h3>

            <p className="text-zinc-200 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        </section>
      ))}
    </div>
  );
}