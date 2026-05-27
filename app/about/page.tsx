"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, Cpu } from "lucide-react";

// Premium typographic fade-up animation helper
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { 
    delay, 
    duration: 0.8, 
    ease: [0.16, 1, 0.3, 1] as const 
  },
});

export default function About() {
  return (
    <div className="pt-32 pb-32 min-h-screen bg-surface selection:bg-accent/10 selection:text-primary">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* ── Centered Premium Story Section ── */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8 mb-36">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <p className="label-sm text-accent tracking-[0.25em] flex items-center gap-3.5 font-semibold">
              <span className="w-6 h-[1.5px] bg-accent"></span> ABOUT THE STUDIO
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-light tracking-[-0.03em] text-primary leading-[1.15]">
              We are a boutique collective of developers, designers, and digital strategists.
            </h1>
            
            <div className="w-24 h-px bg-outline my-2" />
            
            <p className="text-base md:text-lg text-text-muted font-light leading-relaxed">
              Founded on the principles of extreme technical rigor and uncompromising aesthetic execution, MBM Tech Studio was built to serve forward-thinking brands who refuse to settle for templates or ordinary design.
            </p>
            
            <p className="text-base md:text-lg text-text-muted font-light leading-relaxed">
              We believe the web is the ultimate canvas for brand expression. Our mission is to elevate that expression by engineering highly performant, visually stunning, and flawless digital systems that leave lasting impacts.
            </p>
          </motion.div>
        </div>

        {/* ── Premium Philosophy & Value Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-36">
          {[
            {
              icon: Compass,
              title: "Aesthetic Rigor",
              desc: "Every pixel, transition, and layout is crafted with extreme intent. We believe in visual perfection that speaks authority."
            },
            {
              icon: Cpu,
              title: "Technical Excellence",
              desc: "Building with next-gen frameworks like Next.js for blazing fast loading times, exceptional SEO, and robust page performance."
            },
            {
              icon: ShieldCheck,
              title: "Strategic Impact",
              desc: "We align digital products with your real business goals, converting cold traffic into dedicated, high-paying clientele."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.12)}
              className="p-8 md:p-10 border border-outline hover:border-accent/25 bg-white/50 backdrop-blur-sm rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md flex flex-col gap-6"
            >
              <div className="p-3.5 bg-accent/10 border border-accent/20 rounded-xl w-fit text-accent">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-text-muted leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Interactive Quote / Callout Panel ── */}
        <motion.div
          {...fadeUp(0.2)}
          className="bg-primary text-surface p-12 md:p-20 relative rounded-3xl overflow-hidden shadow-2xl border border-white/5"
        >
          {/* Subtle glowing ambient spots */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent rounded-full blur-[120px] opacity-[0.15]"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500 rounded-full blur-[120px] opacity-[0.05]"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
            <span className="text-accent text-sm font-mono tracking-[0.25em] uppercase font-bold">OUR CORE PHILOSOPHY</span>
            
            <blockquote className="text-2xl md:text-4xl font-heading font-light tracking-tight leading-snug text-white/90">
              &ldquo;Great software is invisible. The user shouldn&apos;t notice the underlying technology; they should only feel the absolute magic of the experience it enables.&rdquo;
            </blockquote>
            
            <div className="w-16 h-[1.5px] bg-accent/35 mt-4" />
            
            <div className="flex flex-col items-center gap-1">
              <p className="text-sm tracking-widest font-mono text-white/70 uppercase font-semibold">MBM TECH STUDIO</p>
            </div>
            
            <Link
              href="/contact"
              className="mt-6 group inline-flex items-center gap-2.5 px-6 py-3 bg-white text-black font-semibold text-xs tracking-wider uppercase rounded-sm hover:bg-white/90 transition-all shadow-lg active:scale-95 duration-300"
            >
              Collaborate With Us
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
