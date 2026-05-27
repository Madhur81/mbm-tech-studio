"use client"

import { useState } from "react"
import { MeshGradient } from "@paper-design/shaders-react"
import Link from "next/link"

export const Component = () => {
  const [speed] = useState(1.0)
  const [intensity] = useState(1.5)

  return (
    <div className="w-full h-screen bg-white relative overflow-hidden">
      {/* White Mesh Gradient Background */}
      <MeshGradient
        className="w-full h-full absolute inset-0 opacity-80"
        colors={["#ffffff", "#f8f9fa", "#f1f3f5", "#e9ecef"]}
        speed={speed}
      />
      


      {/* Lighting overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/3 w-64 h-64 bg-gray-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: `${3 / speed}s` }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gray-300/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDuration: `${2 / speed}s`, animationDelay: "1s" }}
        />
      </div>

      {/* Gradient Overlay to ensure text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/40 via-white/10 to-white/80 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center pt-20 pb-20 pointer-events-none">
        <div className="text-center px-4 md:px-8 pointer-events-auto max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Identity Tag */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-xs font-mono tracking-widest uppercase text-accent font-semibold">Website Development Agency</span>
          </div>

          {/* Main Title */}
          <h1 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-light tracking-[-0.05em] leading-[1.1] text-primary animate-fade-in-up-delay"
            style={{ textShadow: '0 4px 40px rgba(0,0,0,0.05)' }}
          >
            We Design & Build<br />Websites That Convert.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base md:text-lg font-light max-w-2xl text-gray-600 animate-fade-in-up-delay" style={{ animationDelay: '0.4s' }}>
            MBM Tech Studio crafts high-performance, conversion-focused websites and digital experiences for modern brands, helping you scale with confidence.
          </p>

          {/* CTAs */}
          <div 
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-fade-in-up-delay"
            style={{ animationDelay: '0.6s' }}
          >
            <Link 
              href="/contact" 
              className="bg-accent text-primary px-8 py-4 font-bold text-sm tracking-wide hover:bg-accent/90 transition-all flex items-center gap-2 group hover:scale-105 active:scale-95 shadow-xl shadow-accent/20 rounded-sm"
            >
              Want Website
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link 
              href="/work" 
              className="border border-primary/20 text-primary px-8 py-4 font-bold text-sm tracking-wide flex items-center gap-2 group hover:bg-primary/5 hover:border-primary/40 transition-all rounded-sm"
            >
              View Our Work
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>


    </div>
  )
}
