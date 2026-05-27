'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export const Component = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      float hash(vec2 p) {
          p = fract(p * vec2(123.34, 456.21));
          p += dot(p, p + 45.32);
          return fract(p.x * p.y);
      }

      float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          float a = hash(i);
          float b = hash(i + vec2(1.0, 0.0));
          float c = hash(i + vec2(0.0, 1.0));
          float d = hash(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      float fbm(vec2 p) {
          float v = 0.0;
          float a = 0.5;
          for (int i = 0; i < 6; i++) {
              v += a * noise(p);
              p *= 2.0;
              a *= 0.5;
          }
          return v;
      }

      void main() {
          vec2 uv = gl_FragCoord.xy / u_resolution.xy;
          uv.x *= u_resolution.x / u_resolution.y;

          vec2 mPos = u_mouse / u_resolution.xy;
          mPos.x *= u_resolution.x / u_resolution.y;
          float dist = distance(uv, mPos);
          
          vec2 q = vec2(0.0);
          q.x = fbm(uv + 0.07 * u_time);
          q.y = fbm(uv + vec2(1.0, 1.0));

          vec2 r = vec2(0.0);
          r.x = fbm(uv + 1.0 * q + vec2(1.7, 9.2) + 0.15 * u_time);
          r.y = fbm(uv + 1.0 * q + vec2(8.3, 2.8) + 0.126 * u_time);

          float f = fbm(uv + r);

          // Deep yellow palette with misty highlights
          vec3 baseColor = vec3(0.06, 0.05, 0.01);
          vec3 mistColor = vec3(0.7, 0.5, 0.05);
          vec3 accentColor = vec3(1.0, 0.8, 0.15);

          vec3 color = mix(baseColor, mistColor, f);
          color = mix(color, accentColor, dot(q, r) * 0.5);
          
          // Subtle mouse glow
          float mouseGlow = smoothstep(0.35, 0.0, dist);
          color += mouseGlow * 0.05 * vec3(1.0, 0.9, 0.3);

          // Post-processing
          color = pow(color, vec3(1.1)) * 1.4;
          gl_FragColor = vec4(color, 1.0);
      }
    `;

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const program = gl.createProgram()!;
    gl.attachShader(program, compileShader(gl.VERTEX_SHADER, vsSource));
    gl.attachShader(program, compileShader(gl.FRAGMENT_SHADER, fsSource));
    gl.linkProgram(program);
    gl.useProgram(program);

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const posAttrib = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(posAttrib);
    gl.vertexAttribPointer(posAttrib, 2, gl.FLOAT, false, 0, 0);

    const timeLoc = gl.getUniformLocation(program, 'u_time');
    const resLoc = gl.getUniformLocation(program, 'u_resolution');
    const mouseLoc = gl.getUniformLocation(program, 'u_mouse');

    let mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = window.innerHeight - e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    const render = (time: number) => {
      if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }

      gl.uniform1f(timeLoc, time * 0.001);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.uniform2f(mouseLoc, mouse.x, mouse.y);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black selection:bg-accent/30 selection:text-white">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto z-0"
        style={{ background: '#09090b' }}
      />
      
      {/* Gradient Overlay to ensure text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/10 to-black/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-center pointer-events-none">
        <div className="text-center px-8 pointer-events-auto">
          {/* Main Title */}
          <h1 
            className={`
              text-5xl sm:text-6xl md:text-8xl lg:text-9xl 
              font-light tracking-[-0.05em] leading-tight
              text-white
              opacity-0
              ${isLoaded ? 'animate-fade-in-up' : ''}
            `}
            style={{ 
              textShadow: '0 4px 40px rgba(0,0,0,0.5)'
            }}
          >
            We Build Websites<br />That Drive Results.
          </h1>

          {/* Subtitle */}
          <p 
            className={`
              mt-8 text-base md:text-lg lg:text-xl 
              font-light max-w-2xl mx-auto
              text-gray-300
              opacity-0
              ${isLoaded ? 'animate-fade-in-up-delay' : ''}
            `}
          >
            Fast, conversion-ready websites.
          </p>

          {/* CTAs */}
          <div 
            className={`
              mt-12 flex flex-col sm:flex-row items-center justify-center gap-6
              opacity-0
              ${isLoaded ? 'animate-fade-in-up-delay' : ''}
            `}
            style={{ animationDelay: '0.6s' }}
          >
            <Link 
              href="/contact" 
              className="bg-white text-black px-8 py-4 font-bold text-sm tracking-wide hover:bg-white/90 transition-all flex items-center gap-2 group hover:scale-105 active:scale-95 shadow-xl"
            >
              Want Website
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link 
              href="/work" 
              className="text-white font-bold text-sm tracking-wide flex items-center gap-2 group hover:text-white/70 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
