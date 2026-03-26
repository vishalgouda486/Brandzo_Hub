"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const Cursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const springConfig = { damping: 20, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 1024 && !("ontouchstart" in window));
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, .group")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    if (window.innerWidth >= 1024) {
      window.addEventListener("mousemove", moveMouse);
      document.addEventListener("mouseover", handleMouseOver);
    }

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", moveMouse);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isDesktop) return null;

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
      <motion.div
        animate={{
          scale: isHovered ? 2 : 1,
          backgroundColor: isHovered
            ? "rgba(6, 182, 212, 0.12)"
            : "rgba(6, 182, 212, 0)",
          borderColor: isHovered
            ? "rgba(34, 211, 238, 0.6)"
            : "rgba(34, 211, 238, 0.3)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="w-8 h-8 rounded-full border"
      />
      <div className="absolute w-1.5 h-1.5 bg-white rounded-full" />
    </motion.div>
  );
};

export default Cursor;