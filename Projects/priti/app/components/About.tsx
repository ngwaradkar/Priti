"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Target, Zap, Shield, Users, TrendingUp, Layers } from "lucide-react";

// Animated count-up hook
function useCountUp(target: number, duration: number = 1500) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const start = () => {
    if (started) return;
    setStarted(true);
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return { count, start };
}

function StatCard({
  value,
  suffix,
  label,
  color,
  index,
}: {
  value: number;
  suffix?: string;
  label: string;
  color: "teal" | "red" | "purple";
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { count, start } = useCountUp(value, 1400);

  useEffect(() => {
    if (isInView) start();
  }, [isInView]); // eslint-disable-line

  const colorMap = {
    teal: "text-[#00e5cc] border-[#00e5cc]/25",
    red: "text-[#ff3b5c] border-[#ff3b5c]/25",
    purple: "text-[#7c3aed] border-[#7c3aed]/25",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`stat-card border ${colorMap[color]}`}
    >
      <div className={`text-4xl font-extrabold font-mono ${colorMap[color].split(" ")[0]}`}
        style={{ fontFamily: "var(--font-poppins)" }}>
        {count}{suffix}
      </div>
      <div className="text-slate-400 text-sm mt-2 font-medium">{label}</div>
    </motion.div>
  );
}

const philosophyCards = [
  {
    icon: TrendingUp,
    title: "Shift-Left Testing",
    desc: "Catch issues early in the SDLC before they become costly production bugs.",
    color: "teal",
  },
  {
    icon: Shield,
    title: "Quality-First Mindset",
    desc: "Every feature ships only after rigorous validation across all test dimensions.",
    color: "purple",
  },
  {
    icon: Target,
    title: "Zero Defect Culture",
    desc: "0 escaped defects to production — the only acceptable standard.",
    color: "red",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#00e5cc]/3 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 font-mono text-[#00e5cc] text-sm mb-4">
            <span className="text-slate-600">// section_02</span>
            <span>ABOUT.tsx</span>
          </div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Who <span className="text-gradient">I Am</span>
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-[#00e5cc] to-[#7c3aed] mx-auto" />
        </motion.div>

        {/* 4-column stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <StatCard value={5}  suffix="+" label="Years Experience"   color="teal"   index={0} />
          <StatCard value={247} suffix="+" label="Tests Automated"   color="teal"   index={1} />
          <StatCard value={6}  suffix="+"  label="Projects Delivered" color="purple" index={2} />
          <StatCard value={0}  suffix=""   label="Bugs Escaped"      color="red"    index={3} />
        </div>

        {/* Profile + philosophy grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Profile summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#00e5cc]/10 border border-[#00e5cc]/30 flex items-center justify-center">
                <Users className="w-5 h-5 text-[#00e5cc]" />
              </div>
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                About Me
              </h3>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed">
              I&apos;m <strong className="text-white">Priti Waradkar</strong>, a dedicated Senior QA Engineer with{" "}
              <strong className="text-[#00e5cc]">5+ years of expertise</strong> in manual and automation
              testing across web, mobile, and wearable devices.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Skilled in{" "}
              <strong className="text-[#00e5cc]">
                Selenium with Java, Appium, BDD Cucumber, API testing, CI/CD pipelines
              </strong>{" "}
              and Agile methodology. I have a proven ability to lead teams, deliver quality software,
              and integrate modern test automation frameworks to enhance efficiency and coverage.
            </p>

            <p className="text-slate-400 leading-relaxed">
              I leverage{" "}
              <strong className="text-[#7c3aed]">AI tools like ChatGPT and Gemini</strong> to generate BDD
              scenarios, create test cases, and write Selenium scripts faster — reducing test design time by approximately{" "}
              <strong className="text-[#00e5cc]">30%</strong> and improving coverage.
            </p>

            {/* Pull quote */}
            <div className="border-l-2 border-[#00e5cc] pl-5 py-2 bg-[#00e5cc]/5 rounded-r-xl">
              <p className="font-mono text-sm text-slate-400 italic leading-relaxed">
                &ldquo;Quality is not an act, it is a habit — and I make sure every bug gets caught before production.&rdquo;
              </p>
            </div>

            {/* Education inline */}
            <div className="glass-card rounded-xl p-4 border border-[#7c3aed]/20 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#7c3aed]/10 border border-[#7c3aed]/30 flex items-center justify-center flex-shrink-0">
                <Layers className="w-5 h-5 text-[#7c3aed]" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-poppins)" }}>
                  MCA — Master of Computer Applications
                </div>
                <div className="text-slate-500 text-xs font-mono mt-0.5">
                  Computer Science · 2018–2020
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Philosophy cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="font-mono text-xs text-slate-500 mb-5">// qa_philosophy</div>

            {philosophyCards.map((card, i) => {
              const colorMap = {
                teal:   { text: "text-[#00e5cc]", border: "border-[#00e5cc]/20", bg: "bg-[#00e5cc]/10", hover: "hover:border-[#00e5cc]/50" },
                purple: { text: "text-[#7c3aed]", border: "border-[#7c3aed]/20", bg: "bg-[#7c3aed]/10", hover: "hover:border-[#7c3aed]/50" },
                red:    { text: "text-[#ff3b5c]", border: "border-[#ff3b5c]/20", bg: "bg-[#ff3b5c]/10", hover: "hover:border-[#ff3b5c]/50" },
              };
              const c = colorMap[card.color as keyof typeof colorMap];
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className={`glass-card rounded-2xl p-5 border ${c.border} ${c.hover} transition-all duration-300 flex items-start gap-4`}
                >
                  <div className={`w-11 h-11 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}>
                    <card.icon className={`w-5 h-5 ${c.text}`} />
                  </div>
                  <div>
                    <h4 className={`font-bold text-sm ${c.text} mb-1`} style={{ fontFamily: "var(--font-poppins)" }}>
                      {card.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Mini metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-card rounded-2xl p-5 border border-white/5 grid grid-cols-3 gap-3 text-center"
            >
              {[
                { label: "Automation", icon: "⚡", value: "Selenium + Appium" },
                { label: "CI/CD", icon: "🔄", value: "Jenkins + GitHub Actions" },
                { label: "AI", icon: "🤖", value: "ChatGPT + Gemini" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-xl mb-1">{item.icon}</div>
                  <div className="text-[#00e5cc] text-xs font-bold font-mono">{item.label}</div>
                  <div className="text-slate-600 text-[10px] mt-0.5">{item.value}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
