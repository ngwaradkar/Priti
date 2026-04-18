"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import AiTesting from "./components/AiTesting";
import Education from "./components/Education";
import Contact from "./components/Contact";
import RecruiterView from "./components/RecruiterView";
import { ArrowUp, Mail, Phone, MapPin, ExternalLink, TestTube2 } from "lucide-react";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-40 w-11 h-11 rounded-full bg-[#00e5cc] text-[#050d0f] flex items-center justify-center shadow-[0_0_20px_rgba(0,229,204,0.4)] hover:bg-white hover:scale-110 active:scale-95 transition-all duration-200"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "AI Testing", href: "#ai-testing" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/priti-dandvate",
    icon: ExternalLink,
  },
];

export default function Home() {
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);
  const toggleRecruiterMode = () => setIsRecruiterMode((prev) => !prev);

  return (
    <>
      <Navbar isRecruiterMode={isRecruiterMode} onToggleRecruiter={toggleRecruiterMode} />

      <AnimatePresence mode="wait">
        {isRecruiterMode ? (
          <motion.div
            key="recruiter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <RecruiterView onToggle={toggleRecruiterMode} />
          </motion.div>
        ) : (
          <motion.main
            key="portfolio"
            id="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="flex min-h-screen flex-col"
          >
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <AiTesting />
            <Education />
            <Contact />

            {/* ─── Enhanced Footer ─── */}
            <footer className="w-full bg-[#050d0f] border-t border-[#00e5cc]/10">
              <div className="container mx-auto px-6 py-14">
                {/* Top row */}
                <div className="grid md:grid-cols-3 gap-10 mb-10">
                  {/* Brand column */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg border border-[#00e5cc]/40 flex items-center justify-center">
                        <TestTube2 className="w-4 h-4 text-[#00e5cc]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-poppins)" }}>Priti Waradkar</div>
                        <div className="text-[10px] font-mono text-[#00e5cc]/60 tracking-widest">SENIOR QA ENGINEER</div>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      5+ years of bug-free delivery. Selenium, Appium, AI-enhanced automation. Based in Pune, India.
                    </p>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#00e5cc] animate-pulse" />
                      <span className="text-[#00e5cc] text-xs font-mono">Open to Work</span>
                    </div>
                  </div>

                  {/* Quick links column */}
                  <div>
                    <h4 className="text-white font-bold text-sm mb-4 font-mono">// Quick Links</h4>
                    <ul className="space-y-2">
                      {quickLinks.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            className="text-slate-600 hover:text-[#00e5cc] text-sm font-mono transition-colors flex items-center gap-2"
                          >
                            <span className="text-[#00e5cc]/30">#</span>
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact column */}
                  <div>
                    <h4 className="text-white font-bold text-sm mb-4 font-mono">// Contact</h4>
                    <div className="space-y-3">
                      <a href="mailto:pritidandvate97@gmail.com" className="flex items-center gap-2 text-slate-600 hover:text-[#00e5cc] transition-colors text-sm">
                        <Mail className="w-3.5 h-3.5 text-[#00e5cc]/60" />
                        pritidandvate97@gmail.com
                      </a>
                      <a href="tel:+917057264071" className="flex items-center gap-2 text-slate-600 hover:text-[#00e5cc] transition-colors text-sm">
                        <Phone className="w-3.5 h-3.5 text-[#00e5cc]/60" />
                        +91-7057264071
                      </a>
                      <div className="flex items-center gap-2 text-slate-600 text-sm">
                        <MapPin className="w-3.5 h-3.5 text-[#ff3b5c]/60" />
                        Pune, Maharashtra, India
                      </div>
                      {socialLinks.map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-slate-600 hover:text-[#7c3aed] transition-colors text-sm"
                        >
                          <s.icon className="w-3.5 h-3.5 text-[#7c3aed]/60" />
                          {s.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-[#00e5cc]/20 to-transparent mb-8" />

                {/* Bottom row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center font-mono">
                  <div className="text-slate-700 text-xs tracking-widest uppercase">
                    Priti Waradkar © {new Date().getFullYear()} · Senior QA Engineer · Pune, India
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-700 font-mono">
                    <span className="text-[#00e5cc]">✓</span>
                    <span>0 Bugs Escaped</span>
                    <span className="text-slate-800">·</span>
                    <span className="text-[#00e5cc]">✓</span>
                    <span>247+ Tests Passed</span>
                    <span className="text-slate-800">·</span>
                    <span className="text-[#00e5cc]">✓</span>
                    <span>100% Quality Delivered</span>
                  </div>
                </div>
              </div>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>

      <BackToTop />
    </>
  );
}
