"use client";

import { motion, useScroll } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[9999] origin-left bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.45)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}