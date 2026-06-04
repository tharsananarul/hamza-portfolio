"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function ModernBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="fixed inset-0 -z-10 bg-[#f4f5f0]" />;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#f4f5f0]">
      {/* ─── Large Offset Background Circle (mimicking the reference yellow/orange backdrop blob) ─── */}
      <div 
        className="absolute w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full border border-text-primary/[0.04] bg-accent-secondary/[0.03] top-[10%] right-[-10%] pointer-events-none"
      />
      <div 
        className="absolute w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full border border-text-primary/[0.03] bg-accent-primary/[0.03] bottom-[-10%] left-[-10%] pointer-events-none"
      />

      {/* ─── Slowly Rotating Decorative Geometric Outlines (Neo-Brutalist elements) ─── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Large rotating wheel */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[5%] w-[400px] h-[400px] rounded-full border border-text-primary/5 flex items-center justify-center"
        >
          <div className="w-[300px] h-[300px] rounded-full border border-dashed border-text-primary/5" />
          <div className="absolute w-full h-[1px] bg-text-primary/5" />
          <div className="absolute h-full w-[1px] bg-text-primary/5" />
        </motion.div>

        {/* Floating outlined circles */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[15%] w-[180px] h-[180px] rounded-full border border-text-primary/5 flex items-center justify-center"
        >
          <div className="w-10 h-10 border border-text-primary/5" />
        </motion.div>

        {/* Small floating items */}
        {[...Array(6)].map((_, i) => {
          const size = Math.random() * 20 + 10;
          const left = Math.random() * 90 + 5;
          const top = Math.random() * 90 + 5;
          const duration = Math.random() * 15 + 15;
          const delay = Math.random() * -10;

          return (
            <motion.div
              key={i}
              className="absolute border border-text-primary/[0.03]"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: `${top}%`,
                borderRadius: i % 2 === 0 ? "50%" : "0%"
              }}
              animate={{
                y: [0, -40, 0],
                rotate: [0, 360],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
