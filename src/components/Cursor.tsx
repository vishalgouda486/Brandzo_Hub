"use client";

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const Cursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { damping: 20, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = () => setIsHovered(true);
    const handleUnhover = () => setIsHovered(false);

    window.addEventListener("mousemove", moveMouse);
    
    // Magnetic target detection
    const targets = document.querySelectorAll("button, a, .group");
    targets.forEach(t => {
      t.addEventListener("mouseenter", handleHover);
      t.addEventListener("mouseleave", handleUnhover);
    });

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      targets.forEach(t => {
        t.removeEventListener("mouseenter", handleHover);
        t.removeEventListener("mouseleave", handleUnhover);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      {/* Magnetic Outer Ring */}
      <motion.div
        animate={{
          scale: isHovered ? 2.5 : 1,
          // Change "transparent" to this RGBA value
          backgroundColor: isHovered ? "rgba(6, 182, 212, 0.2)" : "rgba(6, 182, 212, 0)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="w-8 h-8 rounded-full border border-cyan-500/30"
      />
      {/* Center Dot */}
      <div className="absolute w-1 h-1 bg-white rounded-full" />
    </motion.div>
  );
}

export default Cursor;