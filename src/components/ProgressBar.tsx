"use client";

import { motion, useScroll } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll(); // Corrected from scrollX to scrollY for vertical page scroll

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 z-[9999] origin-left"
      style={{ scaleX: scrollYProgress }} 
    />
  );
}