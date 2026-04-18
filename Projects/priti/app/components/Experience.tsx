"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Sr. QA Engineer",
    company: "SKO Systems",
    period: "Jul 2024 – Present",
    duration: "Current",
    location: "Pune",
    color: "teal",
    achievements: [
      { emoji: "📈", text: "Reduced test case preparation time by ~30% using AI tools (ChatGPT)" },
      { emoji: "🎯", text: "Mentored 2-member automation team, improving delivery consistency" },
    ],
    highlights: [
      "Participated in Agile ceremonies — Scrum, sprint planning, retrospectives",
      "Designed, automated & executed test cases using <strong>Selenium, Appium, TestNG, Cucumber</strong>",
      "Managed defects via <strong>Azure DevOps</strong>, collaborating with developers for closure",
      "Performed API testing (<strong>Postman, Rest Assured</strong>) and SQL database validations",
      "Conducted mobile app testing (manual + automation) for <strong>Android & tablets</strong>",
      "Leveraged AI tools (ChatGPT) to generate test scenarios, reducing design time by <strong>~30%</strong>",
      "Mentored a <strong>2-member automation team</strong> and provided product knowledge training",
    ],
    tags: ["Selenium", "Appium", "TestNG", "Cucumber", "Postman", "Azure DevOps", "ChatGPT"],
  },
  {
    role: "Sr. QA Engineer",
    company: "Yodda Elder Care Technologies PVT LTD",
    period: "Jun 2023 – Jul 2024",
    duration: "1 yr 1 mo",
    location: "Pune",
    color: "purple",
    achievements: [
      { emoji: "📱", text: "Enhanced wearable device reliability, boosting customer satisfaction by 15%" },
      { emoji: "🔄", text: "Maintained Jenkins CI/CD pipelines for continuous automation execution" },
    ],
    highlights: [
      "Led QA efforts across multiple projects, driving robust test planning and execution",
      "Developed and maintained <strong>Selenium automation frameworks</strong> with Java, TestNG, Maven",
      "Conducted manual & regression testing to validate functionality and performance",
      "Implemented and maintained <strong>Jenkins CI/CD pipelines</strong> for automation execution",
      "Performed API testing & automation (<strong>Postman, Rest Assured</strong>) + device testing for wearables",
      "Enhanced device reliability, contributing to <strong>15% increase in customer satisfaction</strong>",
    ],
    tags: ["Selenium", "Jenkins", "Maven", "Rest Assured", "Regression", "Wearables"],
  },
  {
    role: "Sr QA Engineer",
    company: "ITWorks Infotech PVT. LTD.",
    period: "Oct 2020 – May 2023",
    duration: "2 yrs 7 mos",
    location: "Pune",
    color: "red",
    achievements: [
      { emoji: "✅", text: "100% defect closure rate on all tracked issues across multiple projects" },
      { emoji: "🧪", text: "Delivered comprehensive manual + automation testing for web & mobile apps" },
    ],
    highlights: [
      "Executed manual testing — functional, regression, system — for web and mobile applications",
      "Designed and executed test plans, test cases, and automation scripts",
      "Collaborated with cross-functional teams for requirement analysis and bug resolution",
      "Conducted <strong>UI testing, integration testing</strong>, and database validations",
      "Tracked and reported defects using <strong>JIRA</strong>, ensuring timely closure",
      "Contributed to multiple projects, ensuring <strong>100% closure rate</strong> on tracked defects",
    ],
    tags: ["Manual Testing", "JIRA", "UI Testing", "Integration", "Automation", "SQL"],
  },
];

const colorMap = {
  teal: {
    dot: "bg-[#00e5cc]",
    shadow: "shadow-[0_0_16px_rgba(0,229,204,0.6)]",
    border: "border-[#00e5cc]/30",
    text: "text-[#00e5cc]",
    bg: "bg-[#00e5cc]/10",
    line: "from-[#00e5cc] to-transparent",
    tag: "border-[#00e5cc]/20 text-[#00e5cc]/70 bg-[#00e5cc]/5",
    achieve: "bg-[#00e5cc]/8 border-[#00e5cc]/20 text-[#00e5cc]",
  },
  purple: {
    dot: "bg-[#7c3aed]",
    shadow: "shadow-[0_0_16px_rgba(124,58,237,0.6)]",
    border: "border-[#7c3aed]/30",
    text: "text-[#7c3aed]",
    bg: "bg-[#7c3aed]/10",
    line: "from-[#7c3aed] to-transparent",
    tag: "border-[#7c3aed]/20 text-[#7c3aed]/70 bg-[#7c3aed]/5",
    achieve: "bg-[#7c3aed]/8 border-[#7c3aed]/20 text-[#7c3aed]",
  },
  red: {
    dot: "bg-[#ff3b5c]",
    shadow: "shadow-[0_0_16px_rgba(255,59,92,0.6)]",
    border: "border-[#ff3b5c]/30",
    text: "text-[#ff3b5c]",
    bg: "bg-[#ff3b5c]/10",
    line: "from-[#ff3b5c] to-transparent",
    tag: "border-[#ff3b5c]/20 text-[#ff3b5c]/70 bg-[#ff3b5c]/5",
    achieve: "bg-[#ff3b5c]/8 border-[#ff3b5c]/20 text-[#ff3b5c]",
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-[#00e5cc] text-sm mb-4">// test_execution.history</div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-[#00e5cc] to-[#7c3aed] mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="absolute left-7 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#00e5cc]/60 via-[#7c3aed]/40 to-[#ff3b5c]/30 hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const c = colorMap[exp.color as keyof typeof colorMap];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative md:pl-20"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-4.5 top-7 w-5 h-5 rounded-full ${c.dot} ${c.shadow} border-2 border-[#050d0f] hidden md:flex items-center justify-center`}
                    style={{ left: "22px" }}
                  />

                  <div
                    className={`glass-card rounded-2xl p-6 border ${c.border} hover:shadow-lg transition-all duration-300 group`}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase className={`w-4 h-4 ${c.text}`} />
                          <h3
                            className="text-xl font-bold text-white"
                            style={{ fontFamily: "var(--font-poppins)" }}
                          >
                            {exp.role}
                          </h3>
                        </div>
                        <div className={`text-base font-semibold ${c.text} mb-1`}>{exp.company}</div>
                        <div className="flex flex-wrap gap-3 text-sm text-slate-500 font-mono">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-mono ${c.bg} ${c.text} border ${c.border}`}>
                        {exp.duration}
                      </div>
                    </div>

                    {/* Achievement callouts */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.achievements.map((a, ai) => (
                        <div
                          key={ai}
                          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold border ${c.achieve}`}
                          style={{ background: "rgba(0,229,204,0.06)" }}
                        >
                          <span>{a.emoji}</span>
                          <span>{a.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-5">
                      {exp.highlights.map((highlight, hi) => (
                        <li key={hi} className="flex items-start gap-2 text-sm text-slate-400">
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${c.text}`} />
                          <span
                            dangerouslySetInnerHTML={{
                              __html: highlight,
                            }}
                          />
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2.5 py-0.5 rounded-full text-xs font-mono border ${c.tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
