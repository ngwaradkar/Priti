"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const skillCategories = [
  {
    id: "automation",
    category: "Automation",
    tier: "Mastery",
    color: "teal",
    skills: [
      { name: "Selenium with Java", level: 95, projects: 5 },
      { name: "Appium (iOS & Android)", level: 90, projects: 4 },
      { name: "TestNG", level: 92, projects: 5 },
      { name: "BDD Cucumber Framework", level: 90, projects: 4 },
      { name: "Rest Assured", level: 85, projects: 3 },
    ],
  },
  {
    id: "api",
    category: "API & Tools",
    tier: "Expert",
    color: "purple",
    skills: [
      { name: "Postman", level: 95, projects: 6 },
      { name: "JIRA", level: 93, projects: 6 },
      { name: "Jenkins CI/CD", level: 85, projects: 4 },
      { name: "GitHub Actions", level: 80, projects: 3 },
      { name: "Azure DevOps", level: 78, projects: 2 },
    ],
  },
  {
    id: "testing",
    category: "Testing Types",
    tier: "Advanced",
    color: "red",
    skills: [
      { name: "Manual Testing", level: 98, projects: 6 },
      { name: "Regression Testing", level: 95, projects: 6 },
      { name: "API Testing", level: 92, projects: 5 },
      { name: "Mobile App Testing", level: 90, projects: 4 },
      { name: "Database Testing (SQL)", level: 85, projects: 4 },
    ],
  },
  {
    id: "cicd",
    category: "CI/CD & Dev",
    tier: "Advanced",
    color: "teal",
    skills: [
      { name: "SQL / Database", level: 82, projects: 4 },
      { name: "Agile / Scrum", level: 90, projects: 6 },
      { name: "Apache JMeter", level: 75, projects: 2 },
      { name: "App Center", level: 78, projects: 3 },
      { name: "Client Communication", level: 92, projects: 6 },
    ],
  },
];

const colorMap = {
  teal: {
    bar: "bg-[#00e5cc]",
    text: "text-[#00e5cc]",
    border: "border-[#00e5cc]/30",
    bg: "bg-[#00e5cc]/10",
    tierBg: "bg-[#00e5cc]/10 border-[#00e5cc]/30 text-[#00e5cc]",
  },
  purple: {
    bar: "bg-[#7c3aed]",
    text: "text-[#7c3aed]",
    border: "border-[#7c3aed]/30",
    bg: "bg-[#7c3aed]/10",
    tierBg: "bg-[#7c3aed]/10 border-[#7c3aed]/30 text-[#7c3aed]",
  },
  red: {
    bar: "bg-[#ff3b5c]",
    text: "text-[#ff3b5c]",
    border: "border-[#ff3b5c]/30",
    bg: "bg-[#ff3b5c]/10",
    tierBg: "bg-[#ff3b5c]/10 border-[#ff3b5c]/30 text-[#ff3b5c]",
  },
};

function SkillBar({
  name,
  level,
  projects,
  color,
}: {
  name: string;
  level: number;
  projects: number;
  color: keyof typeof colorMap;
}) {
  const c = colorMap[color];
  return (
    <div className="tooltip-wrapper space-y-1.5 group">
      <div className="tooltip">Used in {projects} project{projects !== 1 ? "s" : ""}</div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-slate-300 font-mono group-hover:text-white transition-colors">
          {name}
        </span>
        <span className={`text-xs font-mono font-bold ${c.text}`}>{level}%</span>
      </div>
      <div className="h-2 bg-[#0a1a1f] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className={`h-full ${c.bar} rounded-full`}
          style={{
            boxShadow: `0 0 8px ${
              color === "teal"
                ? "rgba(0,229,204,0.5)"
                : color === "purple"
                ? "rgba(124,58,237,0.5)"
                : "rgba(255,59,92,0.5)"
            }`,
          }}
        />
      </div>
    </div>
  );
}

const filters = [
  { id: "all", label: "All" },
  { id: "automation", label: "Automation" },
  { id: "api", label: "API & Tools" },
  { id: "testing", label: "Testing" },
  { id: "cicd", label: "CI/CD" },
];

const toolTags = [
  "JIRA", "Postman", "Rest Assured", "Selenium", "Appium",
  "Jenkins", "GitHub Actions", "Apache JMeter", "Azure DevOps",
  "SQL", "App Center", "TestNG", "BDD Cucumber", "ChatGPT", "Gemini",
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCategories =
    activeFilter === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeFilter);

  return (
    <section id="skills" className="py-24 bg-[#050d0f] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5cc]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5cc]/30 to-transparent" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="font-mono text-[#00e5cc] text-sm mb-4">// test_suite.skills</div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-[#00e5cc] to-[#7c3aed] mx-auto" />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`filter-tab${activeFilter === f.id ? " active" : ""}`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Skill grids */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {filteredCategories.map((cat, ci) => {
              const c = colorMap[cat.color as keyof typeof colorMap];
              return (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: ci * 0.1 }}
                  className="glass-card rounded-2xl p-6 border border-white/5 hover:border-[#00e5cc]/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-2 h-7 rounded-full ${c.bar}`} />
                    <div className="flex-1">
                      <h3
                        className={`font-bold ${c.text} text-base`}
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {cat.category}
                      </h3>
                    </div>
                    <div className={`px-2.5 py-0.5 rounded-full text-xs font-mono border ${c.tierBg}`}>
                      {cat.tier}
                    </div>
                    <div className={`ml-1 px-2 py-0.5 rounded text-xs font-mono ${c.bg} ${c.text} border ${c.border}`}>
                      {cat.skills.length} skills
                    </div>
                  </div>
                  <div className="space-y-4">
                    {cat.skills.map((skill) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        projects={skill.projects}
                        color={cat.color as keyof typeof colorMap}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Tools & Technologies cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 border border-[#00e5cc]/10"
        >
          <div className="text-center mb-6">
            <div className="font-mono text-sm text-slate-500 mb-2">// tools_and_technologies</div>
            <h3
              className="text-xl font-bold text-white"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Full Tech Stack
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {toolTags.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.1 }}
                className="tag-chip cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
