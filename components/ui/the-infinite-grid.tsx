"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Compass, Sparkles, Activity } from "lucide-react";

// Premium typographic fade-up animation
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    delay, 
    duration: 0.8, 
    ease: [0.16, 1, 0.3, 1] as const // Premium ultra-smooth cubic-bezier
  },
});

export const Component = () => {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax spring controls for interactive mesh/grid background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 45, stiffness: 200, mass: 1 };
  const gridX = useSpring(mouseX, springConfig);
  const gridY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { width, height, left, top } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 25; // Subtle movement
      const y = (e.clientY - top - height / 2) / 25;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#050507] flex flex-col justify-between select-none"
    >
      {/* ── Background Grid & Lighting (The Infinite Grid) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle grid base with parallax spring offset */}
        <motion.div 
          style={{
            x: gridX,
            y: gridY,
          }}
          className="absolute inset-[-50px] opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:5rem_5rem]"
        />

        {/* Cinematic Radial Accent Glows */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[140px] opacity-[0.12] transition-opacity duration-1000"
          style={{
            background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)"
          }}
        />
        <div 
          className="absolute top-[20%] right-[15%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)"
          }}
        />

        {/* Linear overlay gradient for sleek depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050507] via-transparent to-[#050507] opacity-95" />
        
        {/* Film grain noise for organic digital look */}
        <div 
          className="absolute inset-0 opacity-[0.015]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, 
            backgroundSize: "128px" 
          }} 
        />
      </div>

      {/* Spacer to push content center */}
      <div className="h-20" />

      {/* ── Main Content Area ── */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center">
        
        {/* ── micro-badge ── */}
        <motion.div 
          {...fadeUp(0.1)} 
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/8 bg-white/[0.02] backdrop-blur-md mb-8 pointer-events-auto hover:border-white/15 transition-all duration-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/60 font-semibold">
            Web Design &amp; Development Agency
          </span>
        </motion.div>

        {/* ── Main Typographic Hero ── */}
        <motion.h1 
          {...fadeUp(0.25)} 
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-light tracking-[-0.04em] leading-[1.0] text-white max-w-5xl"
        >
          Your Brand Deserves
          <br />
          <span className="font-semibold bg-gradient-to-r from-accent via-amber-400 to-amber-300 bg-clip-text text-transparent filter drop-shadow-[0_2px_20px_rgba(251,133,0,0.15)]">
            A Better Website.
          </span>
        </motion.h1>

        {/* ── Elite Subtitle ── */}
        <motion.p 
          {...fadeUp(0.45)} 
          className="mt-8 text-base sm:text-lg md:text-xl text-white/50 max-w-2xl font-light leading-relaxed tracking-wide"
        >
          We design and develop stunning, high-performance websites that turn visitors into customers. Fast, modern, and built to grow your business.
        </motion.p>

        {/* ── Cinematic CTAs ── */}
        <motion.div 
          {...fadeUp(0.6)} 
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12 w-full sm:w-auto pointer-events-auto"
        >
          <Link
            href="/contact"
            className="group w-full sm:w-auto text-center px-8 py-4 bg-accent text-black font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-accent/10 active:scale-[0.98] flex items-center justify-center gap-2.5"
          >
            Want Website
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          
          <Link
            href="/work"
            className="group w-full sm:w-auto text-center px-8 py-4 border border-white/10 bg-white/[0.01] hover:bg-white/[0.04] text-white/80 font-semibold text-sm tracking-wider uppercase rounded-sm hover:border-white/20 transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2"
          >
            Explore Work
            <ArrowRight className="w-4 h-4 opacity-40 group-hover:opacity-80 group-hover:translate-x-0.5 transition-all duration-300" />
          </Link>
        </motion.div>
      </div>

      {/* ── Bottom Decorative Nav Bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 1 }}
        className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 pb-10 flex items-end justify-between text-white/30"
      >
        {/* Animated pulse hint */}
        <div className="flex items-center gap-3.5">
          <div className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/25"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white/40"></span>
          </div>
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase font-medium">
            Scroll to explore
          </span>
        </div>
        
        {/* Elegant metadata details */}
        <div className="hidden md:flex items-center gap-6">
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase">EST. 2026</span>
          <div className="w-12 h-[1px] bg-white/10" />
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase">INDIA</span>
        </div>
      </motion.div>
    </section>
  );
};
