import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-32 min-h-screen bg-surface text-primary selection:bg-accent/30 selection:text-white">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Back Link */}
        <Link 
          href="/work" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted hover:text-accent transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Selected Work
        </Link>

        {/* Project Header */}
        <div className="max-w-4xl mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-accent font-semibold block mb-4">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight text-gray-900 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-body font-light leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Dynamic Project Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left / Main Column: Descriptions & Details */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Immersive Narrative Description */}
            <div className="space-y-6">
              <h2 className="text-2xl font-heading font-bold text-gray-900 border-b border-outline/50 pb-3">
                Project Overview
              </h2>
              <p className="text-gray-600 font-body text-base md:text-lg leading-relaxed font-light">
                {project.extendedDesc}
              </p>
            </div>

            {/* Premium Key Features checklist */}
            <div className="space-y-6">
              <h2 className="text-2xl font-heading font-bold text-gray-900 border-b border-outline/50 pb-3">
                Key Deliverables & Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm font-medium text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Custom Tech Stack Table */}
            <div className="space-y-6">
              <h2 className="text-2xl font-heading font-bold text-gray-900 border-b border-outline/50 pb-3">
                Engineering Stack
              </h2>
              <div className="border border-outline/60 rounded-xl overflow-hidden shadow-sm bg-surface-dim/30">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-dim border-b border-outline/60">
                      <th className="px-6 py-4 font-heading font-bold text-gray-900 w-1/3">Architectural Layer</th>
                      <th className="px-6 py-4 font-heading font-bold text-gray-900">Technologies Deployed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.techStack.map((item, index) => (
                      <tr key={index} className="border-b border-outline/40 last:border-0 hover:bg-surface-dim/20 transition-colors">
                        <td className="px-6 py-4 font-mono text-xs font-semibold text-accent uppercase tracking-wider">{item.layer}</td>
                        <td className="px-6 py-4 font-body text-gray-700 font-light">{item.tech}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Media & Action CTA */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            
            {/* Visual Cover Container */}
            <div className="relative aspect-[16/10] w-full bg-surface-dim rounded-2xl overflow-hidden shadow-md border border-outline/60 group">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Action Card */}
            {project.link && (
              <div className="border border-outline p-6 rounded-2xl bg-surface-dim/40 backdrop-blur-sm shadow-sm space-y-4">
                <h3 className="font-heading font-bold text-gray-900 text-lg">
                  Experience Live Platform
                </h3>
                <p className="text-xs text-gray-500 font-body leading-relaxed">
                  Explore the active environment, responsive behaviors, and operational pipelines built by MBM Tech Studio.
                </p>
                <Link 
                  href={project.link}
                  target="_blank"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-bold py-4 hover:bg-accent hover:text-primary transition-all duration-300 rounded-lg active:scale-95 shadow-md"
                >
                  Visit Live Project
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            )}

            {/* Studio Note */}
            <div className="border border-outline/50 p-6 rounded-2xl bg-white/50 backdrop-blur-sm text-xs font-mono text-gray-500 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block mr-2 animate-pulse"></span>
              All dynamic features, cloud hosting operations, and custom APIs designed and engineered with architectural rigor by MBM Tech Studio.
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
