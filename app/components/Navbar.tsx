"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMouthOpen, setIsMouthOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Calculate mouth open/closed state based on scroll position
      // Alternates every 30px of scroll height to create a "chattering" effect
      const scrollStep = Math.floor(window.scrollY / 30);
      setIsMouthOpen(scrollStep % 2 === 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Our Work", path: "/work" },
    { name: "About Us", path: "/about" },
  ];

  // On home page and not scrolled = dark hero, so use white text
  const isOnDarkHero = pathname === "/" && !isScrolled;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-outline/50 py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <Link href="/" className="z-50 relative flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-11 md:h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 rounded-xl overflow-hidden shadow-sm">
              <Image 
                src="/mbm-skull-closed-v2.png" 
                alt="MBM Tech Studio Logo - Closed" 
                fill
                sizes="44px"
                className={`object-contain transition-opacity duration-100 ${isMouthOpen ? "opacity-0" : "opacity-100"}`}
                priority
              />
              <Image 
                src="/mbm-skull-open-v2.png" 
                alt="MBM Tech Studio Logo - Open" 
                fill
                sizes="44px"
                className={`object-contain transition-opacity duration-100 ${isMouthOpen ? "opacity-100" : "opacity-0"}`}
                priority
              />
            </div>
            <span className={`headline-lg tracking-tighter transition-colors duration-300 ${isOnDarkHero ? "text-white" : "text-primary"}`}>
              MBM Tech Studio<span className="text-accent">.</span>
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`label-sm transition-colors duration-300 hover:text-accent ${
                  pathname === link.path 
                    ? (isOnDarkHero ? "text-white font-bold" : "text-primary font-bold")
                    : (isOnDarkHero ? "text-white/70" : "text-text-muted")
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`px-6 py-3 transition-all duration-300 label-sm rounded-sm hover:scale-105 active:scale-95 ${
                isOnDarkHero
                  ? "bg-white text-black hover:bg-accent"
                  : "bg-primary text-surface hover:bg-primary/90"
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden z-50 relative p-2 transition-colors ${isOnDarkHero ? "text-white" : "text-primary"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-surface flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col items-center gap-8 w-full px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-heading font-bold ${
                    pathname === link.path ? "text-primary" : "text-text-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-surface px-8 py-4 w-full max-w-sm text-center text-lg font-heading font-bold mt-4"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
