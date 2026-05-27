"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
});

const ProjectsShowcase = () => {
  return (
    <section className="py-28 md:py-36 bg-[#050507] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] opacity-[0.05]"
          style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div {...fadeUp(0)}>
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-accent font-semibold">
              Selected Work
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] leading-tight mt-3 text-white">
              Our{" "}
              <span className="font-semibold bg-gradient-to-r from-accent via-amber-400 to-amber-300 bg-clip-text text-transparent">
                Projects.
              </span>
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm font-mono tracking-wider uppercase text-white/40 hover:text-accent transition-colors"
            >
              View all work
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div key={project.slug} {...fadeUp(index * 0.12)}>
              <Link href={`/work/${project.slug}`} className="block group">
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-all duration-400 hover:border-white/[0.12] hover:bg-white/[0.05] hover:-translate-y-1">
                  {/* Image — fully visible, no overlay */}
                  <div className="relative w-full aspect-[16/10] bg-white/[0.03]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6">
                    {/* Category + Number */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono tracking-[0.15em] uppercase text-accent/70 font-semibold">
                        {project.category}
                      </span>
                      <span className="text-[11px] font-mono text-white/20 font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-white tracking-tight group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-sm text-white/40 font-light mt-1 mb-4">
                      {project.subtitle}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wide text-white/40 border border-white/[0.06] bg-white/[0.02]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-1.5 text-sm font-medium text-accent/80 group-hover:text-accent transition-colors">
                      View Project
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
