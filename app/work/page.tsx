"use client";
 
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

export default function Work() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-surface text-primary selection:bg-accent/30 selection:text-white">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs font-mono tracking-widest uppercase text-accent font-semibold block mb-4">Selected Work</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight text-gray-900 leading-tight">
            Digital craftsmanship<br/>in action.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-body font-light">
            Sleek applications and automated platforms we&apos;ve engineered to deliver robust digital growth.
          </p>
        </motion.div>

        {/* Projects Grid: 3-column elegant layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border border-outline hover:border-accent/40 bg-surface-dim/40 backdrop-blur-sm rounded-xl p-5 hover:shadow-xl transition-all duration-500 flex flex-col h-full"
            >
              <Link href={`/work/${project.slug}`} className="flex flex-col h-full justify-between">
                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/10] w-full bg-surface-dim rounded-lg overflow-hidden mb-6 shadow-sm border border-outline/50 group-hover:shadow-md transition-all duration-500">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Category and Title */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-outline/50">
                    <h3 className="text-xl font-heading font-bold text-gray-900 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-[9px] font-mono text-accent font-semibold tracking-wider uppercase border border-accent/20 bg-accent/5 px-2.5 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">
                    {project.subtitle}
                  </h4>
                  
                  <p className="text-gray-600 font-body text-xs md:text-sm leading-relaxed mb-6 line-clamp-3 font-light">
                    {project.desc}
                  </p>
                </div>
                
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-[10px] font-mono text-gray-500 bg-surface-dim border border-outline px-2 py-1 rounded-full group-hover:border-gray-300 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1 text-xs font-semibold text-gray-900 group-hover:text-accent transition-colors mt-2">
                    View Project
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
