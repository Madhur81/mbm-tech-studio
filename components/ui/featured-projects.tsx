"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "madox",
    title: "MADOX",
    category: "Web Application / SaaS",
    description: "A modern, cross-database SQL IDE designed for seamless database connectivity and AI-enhanced productivity. It empowers developers and BI specialists to intelligently query, analyze, and visualize data without switching tools.",
    features: ["Universal Database Connectivity", "AI-Powered Query Assistant", "One-Click CRUD Generation", "Smart Data Visualization"],
    link: "#",
    image: "/services/Web Development.jpeg" // We will need real screenshots later, using placeholder for now
  },
  {
    id: "pnb-techno",
    title: "PNB Technologies",
    category: "Corporate Website & CMS",
    description: "A high-performance corporate website for an industrial engineering company. Built with Next.js and integrated with Sanity CMS, allowing dynamic management of product catalogs and service announcements.",
    features: ["Headless CMS Integration", "Data-Driven Catalog", "Server Components", "SEO Optimized"],
    link: "https://pnbtechno.com",
    image: "/services/UI-UX.png" // We will need real screenshots later, using placeholder for now
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-white text-primary border-t border-outline relative">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-mono tracking-widest uppercase text-accent font-semibold">Selected Work</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-4 leading-tight">
              Featured Projects.
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              A glimpse into the digital experiences and robust applications we've engineered for our clients.
            </p>
          </div>
          <div className="mt-8 md:mt-0 hidden md:block">
            <Link 
              href="/work" 
              className="inline-flex items-center gap-2 group text-base font-semibold hover:text-accent transition-colors"
            >
              View all work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-20">
          {projects.map((project, index) => (
            <div key={project.id} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Project Image */}
              <div className="w-full lg:w-3/5 group relative rounded-2xl overflow-hidden bg-surface-dim border border-outline aspect-[16/10] shadow-sm">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <span className="text-sm font-mono text-accent/80 font-semibold mb-3">
                  {project.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light mb-8">
                  {project.description}
                </p>
                
                <div className="mb-8 space-y-3">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {project.link !== "#" && (
                  <Link 
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-accent transition-colors w-fit pb-1 border-b border-gray-900 hover:border-accent"
                  >
                    Visit Live Website
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                )}
              </div>

            </div>
          ))}
        </div>

        <div className="mt-16 md:hidden">
            <Link 
              href="/work" 
              className="inline-flex items-center justify-center w-full gap-2 group text-base font-semibold border border-outline rounded-lg py-4 hover:border-accent hover:text-accent transition-colors"
            >
              View all work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>

      </div>
    </section>
  );
}
