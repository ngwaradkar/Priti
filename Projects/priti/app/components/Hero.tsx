"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, ChevronDown, Bug, CheckCircle2, Clock, Download, ArrowRight } from "lucide-react";

const terminalLines = [
  { type: "pass", text: "✓ selenium.automation.webdriver — PASSED (1.2s)", delay: 0 },
  { type: "pass", text: "✓ appium.mobile.android — PASSED (2.4s)", delay: 0.3 },
  { type: "pass", text: "✓ api.postman.collection — PASSED (0.8s)", delay: 0.6 },
  { type: "fail", text: "✗ production.bug.regression — FOUND (0.3s)", delay: 0.9 },
  { type: "pass", text: "✓ cucumber.bdd.scenario — PASSED (1.7s)", delay: 1.2 },
  { type: "pass", text: "✓ jenkins.ci.pipeline — PASSED (4.1s)", delay: 1.5 },
  { type: "info", text: "► All 247 test cases executed. Defect logged.", delay: 1.8 },
];

const valuePropsList = [
  { icon: "✓", text: "0 Escaped Defects | 247+ Tests Automated" },
  { icon: "✓", text: "5+ Years Web / Mobile / API Testing Expertise" },
  { icon: "✓", text: "AI-Driven Test Design (ChatGPT, Gemini Integration)" },
];

function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= terminalLines.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="w-full max-w-md glass-card rounded-xl overflow-hidden border border-[#00e5cc]/15"
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#00e5cc]/10 bg-[#0a1a1f]/50">
        <div className="w-3 h-3 rounded-full bg-[#ff3b5c]" />
        <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
        <div className="w-3 h-3 rounded-full bg-[#00e5cc]" />
        <span className="ml-2 text-xs font-mono text-slate-500">priti-qa-suite.sh</span>
      </div>
      {/* Terminal body */}
      <div className="p-4 font-mono text-xs space-y-1.5 min-h-[180px]">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex items-start gap-2 ${
              line.type === "pass"
                ? "text-[#00e5cc]"
                : line.type === "fail"
                ? "text-[#ff3b5c]"
                : "text-[#7c3aed]"
            }`}
          >
            <span className="shrink-0">{line.text}</span>
          </motion.div>
        ))}
        {visibleLines < terminalLines.length && (
          <span className="text-[#00e5cc] animate-pulse">▋</span>
        )}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20" id="hero">
      {/* Pure CSS dark background — no WebGL */}
      <div className="absolute inset-0 -z-10" style={{ background: "#050d0f" }}>
        {/* Dot grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, rgba(0,229,204,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />
        {/* Teal glow top-right */}
        <div className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full" style={{
          background: "radial-gradient(circle, rgba(0,229,204,0.07) 0%, transparent 70%)"
        }} />
        {/* Purple glow bottom-left */}
        <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full" style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)"
        }} />
        {/* Fade to section below */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#050d0f]" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-5 gap-12 items-center py-20">
        {/* Left — Text content (60%) */}
        <div className="lg:col-span-3 space-y-7">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00e5cc]/30 bg-[#00e5cc]/10 text-[#00e5cc] text-sm font-mono"
          >
            <div className="w-2 h-2 rounded-full bg-[#00e5cc] animate-pulse" />
            Available for Senior QA Roles · Pune, India
          </motion.div>

          {/* H1 — Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1
              className="text-4xl lg:text-6xl font-extrabold leading-tight"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <span className="text-white">Senior QA Engineer</span>
              <br />
              <span className="text-gradient">5+ Years | AI-Enhanced</span>
              <br />
              <span className="text-white">Automation</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed max-w-xl"
          >
            Delivering bug-free software across{" "}
            <span className="text-[#00e5cc]">web, mobile & API</span>. I leverage AI + Selenium to catch defects{" "}
            <span className="text-white font-semibold">30% faster</span>.
          </motion.p>

          {/* Value Props */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-3"
          >
            {valuePropsList.map((vp, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + i * 0.1 }}
                className="flex items-center gap-3 text-slate-300"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#00e5cc]/15 border border-[#00e5cc]/40 flex items-center justify-center text-[#00e5cc] text-xs font-bold">
                  ✓
                </span>
                <span className="text-sm font-mono">{vp.text}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              id="hero-hire-btn"
              className="group flex items-center gap-2 px-7 py-3.5 bg-[#00e5cc] text-[#050d0f] rounded-xl font-bold hover:bg-white hover:shadow-[0_0_30px_rgba(0,229,204,0.4)] transition-all duration-300 text-sm"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Let&apos;s Work Together
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="Priti_Waradkar_Resume.pdf"
              download
              id="hero-resume-btn"
              className="flex items-center gap-2 px-7 py-3.5 border border-[#00e5cc]/40 rounded-xl text-[#00e5cc] hover:bg-[#00e5cc]/10 hover:border-[#00e5cc] transition-all duration-300 font-mono text-sm"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          {/* Contact Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-5 text-sm text-slate-500 pt-1"
          >
            <a
              href="mailto:pritidandvate97@gmail.com"
              className="flex items-center gap-2 hover:text-[#00e5cc] transition-colors font-mono text-xs"
            >
              <Mail className="w-3.5 h-3.5 text-[#00e5cc]" />
              pritidandvate97@gmail.com
            </a>
            <a
              href="tel:+917057264071"
              className="flex items-center gap-2 hover:text-[#00e5cc] transition-colors font-mono text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#00e5cc]" />
              +91-7057264071
            </a>
            <div className="flex items-center gap-2 font-mono text-xs">
              <MapPin className="w-3.5 h-3.5 text-[#ff3b5c]" />
              Pune, Maharashtra
            </div>
          </motion.div>
        </div>

        {/* Right — Avatar + Terminal (40%) */}
        <div className="lg:col-span-2 space-y-6 flex flex-col items-center">
          {/* Profile Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            {/* Concentric glowing rings */}
            <div className="absolute inset-[-10px] rounded-full border border-[#00e5cc]/30 shadow-[0_0_15px_rgba(0,229,204,0.2)] pointer-events-none" />
            <div className="absolute inset-[-20px] rounded-full border border-[#00e5cc]/10 pointer-events-none" />
            <div className="absolute inset-[-30px] rounded-full border border-[#00e5cc]/5 pointer-events-none" />

            {/* Circular text around the avatar */}
            <div className="absolute inset-[-35px] rounded-full pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  {/* Path for name (Top) */}
                  <path id="circlePathTop" d="M 20,50 A 30,30 0 1,1 80,50" />
                  {/* Path for role (Bottom) */}
                  <path id="circlePathBottom" d="M 20,50 A 30,30 0 1,0 80,50" />
                </defs>
                <text className="fill-white font-bold uppercase tracking-[0.2em] text-[5px]">
                  <textPath href="#circlePathTop" startOffset="50%" textAnchor="middle">
                    Priti Waradkar
                  </textPath>
                </text>
                <text className="fill-[#00e5cc] font-bold uppercase tracking-[0.2em] text-[5px]">
                  <textPath href="#circlePathBottom" startOffset="50%" textAnchor="middle">
                    QA Engineer
                  </textPath>
                </text>
              </svg>
            </div>

            <div className="w-52 h-52 rounded-full overflow-hidden border-2 border-[#00e5cc]/40 shadow-[0_0_50px_rgba(0,229,204,0.2)] relative bg-[#0a1a1f]">
              {/* Fallback initials — always behind */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0a1a1f] to-[#112a30]">
                <span className="text-5xl font-extrabold text-gradient" style={{ fontFamily: 'var(--font-poppins)' }}>PW</span>
              </div>
              {/* Avatar photo on top — hides itself if 404 via CSS */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Priti/avatar.png"
                alt="Priti Waradkar — Senior QA Engineer"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            {/* Status indicator — moved further out to avoid overlap */}
            <div className="absolute bottom-0 -right-8 flex items-center gap-1.5 bg-[#050d0f]/95 border border-[#00e5cc]/50 rounded-full px-3 py-1.5 shadow-[0_0_20px_rgba(0,229,204,0.3)] z-20">
              <div className="w-2 h-2 rounded-full bg-[#00e5cc] animate-pulse" />
              <span className="text-[#00e5cc] text-[9px] font-mono font-bold whitespace-nowrap">Open to Work</span>
            </div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-3 w-full"
          >
            {[
              { value: "5+", label: "Years Exp.", icon: Clock, color: "teal" },
              { value: "247+", label: "Tests Passed", icon: CheckCircle2, color: "teal" },
              { value: "0", label: "Bugs Escaped", icon: Bug, color: "red" },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`glass-card rounded-xl p-3 text-center border ${
                  stat.color === "red"
                    ? "border-[#ff3b5c]/20 hover:border-[#ff3b5c]/50"
                    : "border-[#00e5cc]/20 hover:border-[#00e5cc]/50"
                } transition-all duration-300`}
              >
                <stat.icon
                  className={`w-4 h-4 mx-auto mb-1 ${
                    stat.color === "red" ? "text-[#ff3b5c]" : "text-[#00e5cc]"
                  }`}
                />
                <div className={`text-xl font-bold font-mono ${
                  stat.color === "red" ? "text-[#ff3b5c]" : "text-[#00e5cc]"
                }`}>
                  {stat.value}
                </div>
                <div className="text-slate-500 text-[10px] mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Terminal Card */}
          <TerminalCard />

          {/* Quick badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-2 justify-center"
          >
            {["Selenium", "Appium", "JIRA", "Jenkins", "Postman", "BDD"].map((tech) => (
              <span
                key={tech}
                className="tag-chip"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
