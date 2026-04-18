"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bug, Menu, X, TestTube2, Briefcase, Mail } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "AI Testing", href: "#ai-testing" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  isRecruiterMode: boolean;
  onToggleRecruiter: () => void;
}

export default function Navbar({ isRecruiterMode, onToggleRecruiter }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [testCount, setTestCount] = useState(247);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Animate test counter
    const interval = setInterval(() => {
      setTestCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 3000);

    // Active section tracking via IntersectionObserver
    const sections = ["about", "skills", "experience", "projects", "ai-testing", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  if (isRecruiterMode) return null;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050d0f]/95 backdrop-blur-xl border-b border-[#00e5cc]/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg border border-[#00e5cc]/40 flex items-center justify-center group-hover:border-[#00e5cc] group-hover:shadow-[0_0_12px_rgba(0,229,204,0.4)] transition-all duration-300">
            <TestTube2 className="w-4 h-4 text-[#00e5cc]" />
          </div>
          <div>
            <div className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-poppins)" }}>PW.qa</div>
            <div className="text-[10px] text-[#00e5cc]/60 font-mono tracking-widest">
              {testCount} TESTS PASSED
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm transition-all duration-200 font-mono relative group ${
                  isActive
                    ? "text-[#00e5cc]"
                    : "text-slate-400 hover:text-[#00e5cc]"
                }`}
              >
                <span className={`mr-1 text-xs transition-colors ${isActive ? "text-[#00e5cc]/80" : "text-[#00e5cc]/30 group-hover:text-[#00e5cc]/80"}`}>#</span>
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-[#00e5cc] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Right side badges + CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#ff3b5c]/30 bg-[#ff3b5c]/10">
            <Bug className="w-3.5 h-3.5 text-[#ff3b5c]" />
            <span className="text-[#ff3b5c] text-xs font-mono">0 Bugs</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#00e5cc]/30 bg-[#00e5cc]/10">
            <div className="w-2 h-2 rounded-full bg-[#00e5cc] animate-pulse" />
            <span className="text-[#00e5cc] text-xs font-mono">Available</span>
          </div>

          {/* Hire Me CTA */}
          <a
            href="#contact"
            id="nav-hire-me-btn"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00e5cc] text-[#050d0f] text-xs font-bold hover:bg-white transition-all duration-200 shadow-[0_0_16px_rgba(0,229,204,0.3)]"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            <Mail className="w-3.5 h-3.5" />
            Hire Me
          </a>

          {/* Recruiter Mode Button */}
          <button
            id="recruiter-mode-btn"
            onClick={onToggleRecruiter}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#00e5cc]/30 text-[#00e5cc] text-xs font-bold font-mono hover:bg-[#00e5cc]/10 hover:border-[#00e5cc] transition-all duration-200"
          >
            <Briefcase className="w-3.5 h-3.5" />
            Recruiter Mode
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-[#00e5cc] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          id="nav-mobile-toggle"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1]"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#050d0f]/98 backdrop-blur-xl border-b border-[#00e5cc]/10 px-6 pb-6"
            >
              {navLinks.map((link, i) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 py-3 border-b border-white/5 last:border-0 font-mono text-sm transition-colors ${
                      isActive ? "text-[#00e5cc]" : "text-slate-400"
                    }`}
                  >
                    <span className={isActive ? "text-[#00e5cc]/80" : "text-[#00e5cc]/40"}>#</span>
                    {link.label}
                    {isActive && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#00e5cc] animate-pulse" />
                    )}
                  </motion.a>
                );
              })}

              <div className="flex gap-3 mt-4">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-[#00e5cc] text-[#050d0f] text-sm font-bold"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  <Mail className="w-4 h-4" />
                  Hire Me
                </a>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  onClick={() => { onToggleRecruiter(); setIsOpen(false); }}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border border-[#00e5cc]/30 text-[#00e5cc] text-sm font-bold font-mono"
                >
                  <Briefcase className="w-4 h-4" />
                  Recruiter
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
