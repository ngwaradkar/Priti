"use client";

import { motion } from "framer-motion";
import { Bot, Zap, BrainCircuit, Code2, TestTube2, TrendingDown } from "lucide-react";

const aiCapabilities = [
  {
    icon: Bot,
    title: "AI Test Case Generation",
    desc: "ChatGPT & Gemini for AI-assisted test case generation with prompt engineering — reducing test design time by ~30%.",
    color: "teal",
    badge: "ChatGPT • Gemini",
  },
  {
    icon: Zap,
    title: "Automated Test Data",
    desc: "AI-driven test data creation for realistic, diverse, and edge-case datasets across complex test scenarios.",
    color: "purple",
    badge: "AI Driven",
  },
  {
    icon: BrainCircuit,
    title: "Defect Analysis & RCA",
    desc: "AI-based root cause identification — faster triage, smarter prioritization, and early detection.",
    color: "red",
    badge: "Root Cause AI",
  },
  {
    icon: Code2,
    title: "Self-Healing Scripts",
    desc: "Scripts that adapt to UI changes automatically, dramatically reducing maintenance overhead.",
    color: "teal",
    badge: "Self-Healing",
  },
  {
    icon: TestTube2,
    title: "BDD Scenario Generation",
    desc: "ChatGPT/Gemini generates comprehensive Gherkin scenarios including edge cases and negative flows.",
    color: "purple",
    badge: "Gherkin + BDD",
  },
  {
    icon: TrendingDown,
    title: "30% Faster Test Design",
    desc: "AI tools reduce test case preparation time significantly, improving defect detection in early stages.",
    color: "red",
    badge: "30% Reduction",
  },
];

const colorMap = {
  teal: {
    border: "border-[#00e5cc]/20",
    text: "text-[#00e5cc]",
    bg: "bg-[#00e5cc]/10",
    glow: "group-hover:shadow-[0_0_24px_rgba(0,229,204,0.2)]",
    badge: "bg-[#00e5cc]/10 text-[#00e5cc] border-[#00e5cc]/30",
  },
  purple: {
    border: "border-[#7c3aed]/20",
    text: "text-[#7c3aed]",
    bg: "bg-[#7c3aed]/10",
    glow: "group-hover:shadow-[0_0_24px_rgba(124,58,237,0.2)]",
    badge: "bg-[#7c3aed]/10 text-[#7c3aed] border-[#7c3aed]/30",
  },
  red: {
    border: "border-[#ff3b5c]/20",
    text: "text-[#ff3b5c]",
    bg: "bg-[#ff3b5c]/10",
    glow: "group-hover:shadow-[0_0_24px_rgba(255,59,92,0.2)]",
    badge: "bg-[#ff3b5c]/10 text-[#ff3b5c] border-[#ff3b5c]/30",
  },
};

export default function AiTesting() {
  return (
    <section id="ai-testing" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050d0f] via-[#070e14] to-[#050d0f] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#7c3aed]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff3b5c]/30 to-transparent" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="font-mono text-[#7c3aed] text-sm mb-4">// ai_driven_enhancements.qa</div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            AI + QA ={" "}
            <span className="text-gradient">Faster, Smarter Testing</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-lg">
            Integrating AI to achieve{" "}
            <span className="text-[#00e5cc] font-semibold">30% faster test design</span>, smarter defect detection,
            and improved coverage.
          </p>
          <div className="h-0.5 w-24 bg-gradient-to-r from-[#7c3aed] to-[#00e5cc] mx-auto mt-6" />
        </motion.div>

        {/* Hero metric banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 border border-[#00e5cc]/20 mb-12 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", damping: 10, stiffness: 100, delay: 0.2 }}
                className="text-7xl lg:text-8xl font-extrabold text-gradient shimmer-text"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                30%
              </motion.div>
              <div className="text-slate-400 font-mono text-sm mt-2">Faster Test Design</div>
            </div>
            <div className="hidden lg:block w-px h-20 bg-gradient-to-b from-transparent via-[#00e5cc]/30 to-transparent" />
            <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-left">
              {[
                { icon: "✓", text: "Test case prep time significantly reduced" },
                { icon: "✓", text: "Coverage improved with AI-generated edge cases" },
                { icon: "✓", text: "Defect detection shifted left in SDLC" },
                { icon: "✓", text: "AI-assisted automation script generation" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-2.5"
                >
                  <span className="w-5 h-5 rounded-full bg-[#00e5cc]/15 border border-[#00e5cc]/40 flex items-center justify-center text-[#00e5cc] text-[10px] font-bold flex-shrink-0">
                    {item.icon}
                  </span>
                  <span className="text-slate-300 text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* AI capabilities grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {aiCapabilities.map((item, i) => {
            const c = colorMap[item.color as keyof typeof colorMap];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className={`glass-card rounded-2xl p-6 border ${c.border} ${c.glow} transition-all duration-300 group cursor-default`}
              >
                <div className={`w-11 h-11 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-4`}>
                  <item.icon className={`w-5 h-5 ${c.text}`} />
                </div>
                <div className="flex items-start justify-between mb-3">
                  <h3
                    className="text-white font-bold text-sm leading-tight pr-2"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {item.title}
                  </h3>
                  <span className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-mono border ${c.badge}`}>
                    {item.badge}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Impact stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 border border-[#7c3aed]/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#7c3aed]/5 rounded-full blur-2xl" />
          <div className="relative grid lg:grid-cols-4 gap-6 text-center">
            {[
              { value: "30%", label: "Faster Test Design", color: "teal" },
              { value: "∞",   label: "Coverage Improvement", color: "purple" },
              { value: "0",   label: "Escaped Defects", color: "red" },
              { value: "AI+", label: "Enhanced Automation", color: "teal" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#050d0f]/60 rounded-xl p-4 border border-white/5">
                <div
                  className={`text-3xl font-extrabold font-mono ${
                    stat.color === "teal"
                      ? "text-[#00e5cc]"
                      : stat.color === "purple"
                      ? "text-[#7c3aed]"
                      : "text-[#ff3b5c]"
                  }`}
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm mt-2 font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
