"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DemoOne as HeroSequence } from "@/components/ui/demo";

import FeatureAccordionSection from "@/components/ui/feature-accordion-section";
import ProjectsShowcase from "@/components/ui/projects-showcase";
import TestimonialSection from "@/components/ui/testimonials";

const LookingForSection = () => {
  const cards = [
    {
      number: "01",
      title: "Elevate Brand Authority",
      desc: "You want a bespoke digital presence, not a generic template. We design award-worthy custom interfaces tailored specifically to your brand identity."
    },
    {
      number: "02",
      title: "Double Website Conversions",
      desc: "Tired of getting traffic that doesn't convert? We engineer high-performance user journeys designed to turn cold visitors into high-paying clients."
    },
    {
      number: "03",
      title: "Unlock Flawless Performance",
      desc: "Slow page loads destroy user trust and SEO. We build blazing fast websites on Next.js, optimized for perfect Core Web Vitals."
    },
    {
      number: "04",
      title: "Establish a Partner for Scale",
      desc: "You need active consultation, not just a vendor. We act as a strategic extension of your team to ensure long-term, high-impact digital growth."
    }
  ];

  return (
    <section className="py-28 bg-surface text-primary relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-accent font-semibold">YOUR GROWTH ACCELERATOR</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light tracking-tight mt-4 leading-tight">
            If you are looking to...
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className="w-full h-full bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-6 flex flex-col cursor-default group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
              >
                <div className="relative z-10 flex flex-col gap-4 h-full">
                  <div>
                    <span className="text-sm font-mono text-accent/80 font-bold bg-accent/10 px-3 py-1 rounded-full">
                      {card.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gray-900 group-hover:text-accent transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light flex-grow">
                    {card.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 group text-base font-semibold bg-gray-900 text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-all active:scale-95 shadow-md"
          >
            Let&apos;s discuss your goals
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="relative">
      <HeroSequence />
      <LookingForSection />
      <FeatureAccordionSection />
      <ProjectsShowcase />
      <TestimonialSection />
    </main>
  );
}
