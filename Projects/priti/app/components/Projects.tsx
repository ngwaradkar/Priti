"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Bug, Globe, Smartphone, Database, Activity, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    name: "mBark",
    type: "Multi-Client QA",
    category: "web",
    icon: Bug,
    description:
      "Managed QA ownership for multiple mBark client applications (CCL, HAL, CUK, VOC) covering web, mobile, API, and automation testing across concurrent delivery cycles. Led defect triage and ensured consistent quality across all client streams.",
    tags: ["Multi-Client", "Web Testing", "Mobile Testing", "API Testing", "Automation"],
    status: "pass",
    tests: 312,
    bugs: 67,
    coverage: 94,
    color: "red",
  },
  {
    name: "Yodda EnablePlus",
    type: "App Testing",
    category: "mobile",
    icon: Smartphone,
    description:
      "QA ownership for an elder care app — covering usability testing, reporting, and comprehensive bug tracking to ensure a seamless user experience for seniors. Conducted wearable device compatibility testing across multiple hardware configurations.",
    tags: ["QA Ownership", "App Usability", "Reporting", "Bug Tracking", "Wearables"],
    status: "pass",
    tests: 143,
    bugs: 42,
    coverage: 91,
    color: "purple",
  },
  {
    name: "Promentor",
    type: "Full-Stack Testing",
    category: "api",
    icon: Activity,
    description:
      "Comprehensive end-to-end testing (Manual + API) for an educational mentoring platform. Responsible for test documentation, bug reporting, and regression cycles. Implemented API automation with Rest Assured ensuring full endpoint coverage.",
    tags: ["E2E Testing", "Manual Testing", "API Testing", "Bug Reporting", "Test Documentation"],
    status: "pass",
    tests: 124,
    bugs: 21,
    coverage: 97,
    color: "purple",
  },
  {
    name: "Surgicloud Inventory",
    type: "Web & App",
    category: "web",
    icon: Globe,
    description:
      "End-to-end QA ownership for a surgical cloud inventory management platform. Covered web, app testing, defect management with JIRA, and UI/UX validation across multiple releases. Collaborated closely with development team for rapid defect resolution.",
    tags: ["Web Testing", "Defect Management (JIRA)", "UI/UX Validation", "App Testing"],
    status: "pass",
    tests: 87,
    bugs: 34,
    coverage: 89,
    color: "teal",
  },
  {
    name: "Academy",
    type: "Database & Web Testing",
    category: "api",
    icon: Database,
    description:
      "Database testing (SQL queries & validations), regression testing, and usability validation for an online learning academy platform. Designed complex SQL test queries to validate data integrity across all platform features.",
    tags: ["Database Testing (SQL)", "Regression Testing", "Usability Validation"],
    status: "pass",
    tests: 96,
    bugs: 18,
    coverage: 88,
    color: "teal",
  },
];

const colorMap = {
  teal: {
    border: "border-[#00e5cc]/20",
    hoverBorder: "hover:border-[#00e5cc]/50",
    text: "text-[#00e5cc]",
    bg: "bg-[#00e5cc]/10",
    dot: "bg-[#00e5cc]",
    shadow: "hover:shadow-[0_8px_32px_rgba(0,229,204,0.15)]",
    tag: "border-[#00e5cc]/20 text-[#00e5cc]/70 bg-[#00e5cc]/5",
    stat: "text-[#00e5cc]",
  },
  purple: {
    border: "border-[#7c3aed]/20",
    hoverBorder: "hover:border-[#7c3aed]/50",
    text: "text-[#7c3aed]",
    bg: "bg-[#7c3aed]/10",
    dot: "bg-[#7c3aed]",
    shadow: "hover:shadow-[0_8px_32px_rgba(124,58,237,0.15)]",
    tag: "border-[#7c3aed]/20 text-[#7c3aed]/70 bg-[#7c3aed]/5",
    stat: "text-[#7c3aed]",
  },
  red: {
    border: "border-[#ff3b5c]/20",
    hoverBorder: "hover:border-[#ff3b5c]/50",
    text: "text-[#ff3b5c]",
    bg: "bg-[#ff3b5c]/10",
    dot: "bg-[#ff3b5c]",
    shadow: "hover:shadow-[0_8px_32px_rgba(255,59,92,0.15)]",
    tag: "border-[#ff3b5c]/20 text-[#ff3b5c]/70 bg-[#ff3b5c]/5",
    stat: "text-[#ff3b5c]",
  },
};

const filters = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "api", label: "API" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());

  const toggleExpand = (name: string) => {
    setExpandedProjects((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  };

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-[#050d0f]/50 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed]/30 to-transparent" />
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="font-mono text-[#7c3aed] text-sm mb-4">// key_projects.qa</div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Key <span className="text-gradient">Projects</span>
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-[#00e5cc] to-[#7c3aed] mx-auto" />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
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

        {/* Project cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, i) => {
              const c = colorMap[project.color as keyof typeof colorMap];
              const isExpanded = expandedProjects.has(project.name);

              return (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className={`glass-card rounded-2xl border ${c.border} ${c.hoverBorder} ${c.shadow} transition-all duration-300 flex flex-col overflow-hidden`}
                >
                  {/* Card header */}
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center`}>
                        <project.icon className={`w-5 h-5 ${c.text}`} />
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#00e5cc]/10 border border-[#00e5cc]/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00e5cc] animate-pulse" />
                        <span className="text-[10px] font-mono text-[#00e5cc] font-bold">ALL PASS ✓</span>
                      </div>
                    </div>

                    <h3
                      className="text-lg font-bold text-white mb-1"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {project.name}
                    </h3>
                    <div className={`text-xs font-mono ${c.text} mb-3`}>{project.type}</div>

                    {/* Short description always visible */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Expanded description */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-slate-400 text-sm leading-relaxed mb-4 overflow-hidden"
                        >
                          {project.description}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {/* Stats — 3 boxes */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-[#0a1a1f] rounded-lg p-2 text-center">
                        <div className={`text-lg font-bold font-mono ${c.stat}`}>{project.tests}</div>
                        <div className="text-[10px] text-slate-600 mt-0.5">Tests</div>
                      </div>
                      <div className="bg-[#0a1a1f] rounded-lg p-2 text-center">
                        <div className="text-lg font-bold font-mono text-[#ff3b5c]">{project.bugs}</div>
                        <div className="text-[10px] text-slate-600 mt-0.5">Bugs Found</div>
                      </div>
                      <div className="bg-[#0a1a1f] rounded-lg p-2 text-center">
                        <div className="text-lg font-bold font-mono text-[#00e5cc]">{project.coverage}%</div>
                        <div className="text-[10px] text-slate-600 mt-0.5">Coverage</div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className={`px-2 py-0.5 rounded-full text-[10px] font-mono border ${c.tag}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Details toggle */}
                  <button
                    onClick={() => toggleExpand(project.name)}
                    className={`flex items-center justify-center gap-2 w-full py-3 border-t ${c.border} text-xs font-mono ${c.text} hover:bg-white/5 transition-colors`}
                  >
                    {isExpanded ? (
                      <>Collapse <ChevronUp className="w-3.5 h-3.5" /></>
                    ) : (
                      <>View Details <ChevronDown className="w-3.5 h-3.5" /></>
                    )}
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
