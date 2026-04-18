"use client";

import { motion } from "framer-motion";
import { Download, CheckCircle2, Bug, Award, Briefcase, GraduationCap, Calendar } from "lucide-react";
import Image from "next/image";

const coreSkills = [
  "Selenium with Java",
  "Appium (iOS & Android)",
  "BDD Cucumber Framework",
  "TestNG & Maven",
  "API Testing (Postman & Rest Assured)",
  "Jenkins CI/CD Pipelines",
  "JIRA Defect Management",
  "Azure DevOps",
  "Manual & Regression Testing",
  "Mobile App Testing",
  "Database Testing (SQL)",
  "AI-Driven Test Automation",
];

const experiences = [
  {
    role: "Sr. QA Engineer",
    company: "SKO Systems",
    period: "Jul 2024 – Present",
    highlights: [
      "Designed and automated test cases using Selenium, Appium, TestNG, Cucumber",
      "Managed defects via Azure DevOps with full developer collaboration",
      "Performed REST API testing (Postman, Rest Assured) and SQL database validations",
      "Leveraged ChatGPT to generate test scenarios, reducing design time by ~30%",
      "Mentored 2-member automation team and delivered product knowledge training",
    ],
    current: true,
  },
  {
    role: "Sr. QA Engineer",
    company: "Yodda Elder Care Technologies PVT LTD",
    period: "Jun 2023 – Jul 2024",
    highlights: [
      "Built and maintained Selenium automation frameworks (Java, TestNG, Maven)",
      "Implemented Jenkins CI/CD pipelines for end-to-end automation execution",
      "Performed API testing & wearable device testing (Postman, Rest Assured)",
      "Contributed to 15% increase in customer satisfaction via device reliability",
    ],
    current: false,
  },
  {
    role: "Sr QA Engineer",
    company: "ITWorks Infotech PVT. LTD.",
    period: "Oct 2020 – May 2023",
    highlights: [
      "Executed functional, regression, system testing for web and mobile apps",
      "Designed test plans, test cases, and automation scripts end-to-end",
      "Tracked defects using JIRA — achieved 100% closure rate on all tracked defects",
      "Conducted UI testing, integration testing, and database validations",
    ],
    current: false,
  },
];

export default function RecruiterView({
  onToggle,
}: {
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white text-slate-900"
    >
      {/* Recruiter Header */}
      <div className="bg-gradient-to-r from-[#050d0f] to-[#0a1a1f] text-white px-8 py-4 flex items-center justify-between border-b border-[#00e5cc]/20">
        <div className="flex items-center gap-3 font-mono text-sm">
          <div className="w-2 h-2 rounded-full bg-[#00e5cc] animate-pulse" />
          <span className="text-[#00e5cc]">recruiter_mode</span>
          <span className="text-slate-600">// clean view enabled</span>
        </div>
        <button
          id="recruiter-exit-btn"
          onClick={onToggle}
          className="text-xs font-mono text-slate-400 hover:text-[#00e5cc] transition-colors border border-slate-700 hover:border-[#00e5cc]/50 px-3 py-1.5 rounded"
        >
          ← Back to Portfolio
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-12 space-y-14">
        {/* Profile header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex gap-5 items-start">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#00e5cc]/40 shrink-0">
              <Image
                src="/avatar.png"
                alt="Priti Waradkar"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h1 className="text-4xl font-black mb-1 text-slate-900">Priti Waradkar</h1>
              <p className="text-lg font-bold text-[#00796b] uppercase tracking-widest">
                Senior QA Engineer — Automation & Manual Testing
              </p>
              <div className="mt-2 text-slate-500 font-medium text-sm space-y-0.5">
                <div>Pune, Maharashtra, India</div>
                <div>pritidandvate97@gmail.com · +91-7057264071</div>
                <div>linkedin.com/in/priti-dandvate</div>
              </div>
            </div>
          </div>

          {/* Download button */}
          <a
            href="priti-waradkar-cv.pdf"
            download="Priti_Waradkar_Resume.pdf"
            id="recruiter-download-btn"
            className="flex items-center gap-3 px-6 py-3 bg-[#050d0f] text-white font-bold rounded-xl hover:bg-[#00796b] transition-colors whitespace-nowrap shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>

        {/* Summary */}
        <div className="bg-slate-50 border-l-4 border-[#00796b] pl-6 py-4 pr-6 rounded-r-xl">
          <p className="text-slate-700 leading-relaxed">
            Experienced QA Engineer with <strong>5+ years of expertise</strong> in manual and automation testing across{" "}
            <strong>web, mobile, and wearable devices</strong>. Skilled in Selenium with Java, Appium, BDD Cucumber, API testing,
            CI/CD pipelines, and Agile methodology. Proven ability to lead teams, deliver quality software, and integrate modern
            test automation frameworks. Leverages AI tools (ChatGPT, Gemini) to accelerate test design by ~30%.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-y border-slate-200 py-8">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "247+", label: "Tests Executed" },
            { value: "100%", label: "Defect Closure Rate" },
            { value: "30%", label: "Faster with AI" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-[#00796b]">{stat.value}</div>
              <div className="text-slate-500 text-xs uppercase font-bold tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Core Skills */}
        <section className="space-y-5">
          <h2 className="text-2xl font-black border-l-4 border-[#00796b] pl-4 text-slate-800">Core Skills</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {coreSkills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-100 shadow-sm hover:border-[#00796b]/30 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="font-semibold text-slate-700 text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="space-y-8">
          <h2 className="text-2xl font-black border-l-4 border-[#00796b] pl-4 text-slate-800">
            <Briefcase className="inline-block w-5 h-5 mr-2 mb-1 text-[#00796b]" />
            Professional Experience
          </h2>
          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-slate-200">
                <div
                  className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full ${
                    exp.current ? "bg-[#00796b]" : "bg-slate-300"
                  }`}
                />
                <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                  <h3 className="text-lg font-bold text-slate-800">{exp.company}</h3>
                  <span className="text-slate-500 font-mono text-sm">{exp.period}</span>
                </div>
                <p
                  className={`font-bold mb-3 ${
                    exp.current ? "text-[#00796b]" : "text-slate-600"
                  }`}
                >
                  {exp.role}
                  {exp.current && (
                    <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-medium">
                      Current
                    </span>
                  )}
                </p>
                <ul className="space-y-1.5">
                  {exp.highlights.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#00796b] shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Key Projects */}
        <section className="space-y-5">
          <h2 className="text-2xl font-black border-l-4 border-[#00796b] pl-4 text-slate-800">Key Projects</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "Surgicloud Inventory", desc: "Web & App Testing, Defect Management (JIRA), UI/UX validation" },
              { name: "Promentor", desc: "End-to-end testing (Manual + API), Test documentation, Bug reporting" },
              { name: "Academy", desc: "Database testing (SQL), Regression testing, Usability validation" },
              { name: "Yodda EnablePlus", desc: "QA ownership for app usability, reporting, and bug tracking" },
              { name: "mBark", desc: "Multi-client QA (CCL, HAL, CUK, VOC) — web, mobile, API, automation" },
            ].map((p) => (
              <div key={p.name} className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-[#00796b]/30 transition-colors">
                <div className="font-bold text-slate-800 mb-1">{p.name}</div>
                <div className="text-sm text-[#00796b]">{p.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Testing Enhancement */}
        <section className="bg-gradient-to-r from-slate-50 to-emerald-50 p-8 rounded-3xl border border-emerald-100">
          <div className="flex items-center gap-3 mb-4">
            <Award className="text-[#00796b]" />
            <h2 className="text-xl font-black text-slate-800">AI-Driven Testing Enhancements</h2>
          </div>
          <ul className="space-y-2">
            {[
              "AI-assisted test case generation (ChatGPT / prompt engineering)",
              "Automated test data generation using AI for edge cases",
              "AI-based defect analysis & root cause identification",
              "Used ChatGPT/Gemini for BDD scenario & Selenium script generation",
              "Reduced test case preparation time significantly, improved early-stage detection",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Education */}
        <section className="space-y-5">
          <h2 className="text-2xl font-black border-l-4 border-[#00796b] pl-4 text-slate-800">
            <GraduationCap className="inline-block w-5 h-5 mr-2 mb-1 text-[#00796b]" />
            Education
          </h2>
          <div className="space-y-3">
            {[
              { deg: "MCA (Master's in Computer Application)", inst: "Pratibha Institute of Business Management", period: "Aug 2017 – Apr 2020" },
              { deg: "BCA (Bachelor's in Computer Application)", inst: "Dyanvardhini College of Chikhali Pune", period: "Jul 2014 – Apr 2017" },
            ].map((e) => (
              <div key={e.deg} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-2 h-2 rounded-full bg-[#00796b] mt-2 shrink-0" />
                <div>
                  <div className="font-bold text-slate-800">{e.deg}</div>
                  <div className="text-[#00796b] text-sm mt-0.5">{e.inst}</div>
                  <div className="text-slate-500 text-xs mt-0.5 font-mono flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {e.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Download CTA */}
        <div className="text-center py-8 border-t border-slate-200">
          <p className="text-slate-500 mb-4 font-mono text-sm">// Ready to hire? Download the full resume.</p>
          <a
            href="priti-waradkar-cv.pdf"
            download="Priti_Waradkar_Resume.pdf"
            id="recruiter-download-bottom-btn"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#050d0f] text-white font-bold rounded-xl hover:bg-[#00796b] transition-colors shadow-lg text-lg"
          >
            <Download className="w-5 h-5" />
            Download Full Resume (PDF)
          </a>
          <div className="mt-4 text-xs text-slate-400 font-mono">CV_Priti_Automation+Manual testing.pdf</div>
        </div>
      </div>
    </motion.div>
  );
}
