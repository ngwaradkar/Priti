"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "MCA (Master's in Computer Application)",
    institution: "Pratibha Institute of Business Management",
    period: "Aug 2017 – Apr 2020",
    color: "teal",
  },
  {
    degree: "BCA (Bachelor's in Computer Application)",
    institution: "Dyanvardhini College of Chikhali Pune",
    period: "Jul 2014 – Apr 2017",
    color: "purple",
  },
  {
    degree: "HSC",
    institution: "Nav-Maharastra College Pimpri Pune",
    period: "Jul 2012 – Feb 2014",
    color: "red",
  },
  {
    degree: "SSC",
    institution: "Abhinav Vidhyalaya Chikhali Pune",
    period: "Mar 2012",
    color: "teal",
  },
];

const colorMap = {
  teal: { text: "text-[#00e5cc]", border: "border-[#00e5cc]/30", bg: "bg-[#00e5cc]/10", dot: "bg-[#00e5cc]" },
  purple: { text: "text-[#7c3aed]", border: "border-[#7c3aed]/30", bg: "bg-[#7c3aed]/10", dot: "bg-[#7c3aed]" },
  red: { text: "text-[#ff3b5c]", border: "border-[#ff3b5c]/30", bg: "bg-[#ff3b5c]/10", dot: "bg-[#ff3b5c]" },
};

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[#050d0f]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="font-mono text-[#00e5cc] text-sm mb-4">// education.history</div>
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-[#00e5cc] to-[#7c3aed] mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {education.map((edu, i) => {
            const c = colorMap[edu.color as keyof typeof colorMap];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass-card rounded-xl p-5 border ${c.border} flex items-start gap-4 hover:scale-[1.01] transition-transform duration-300`}
              >
                <div className={`w-10 h-10 rounded-xl shrink-0 ${c.bg} border ${c.border} flex items-center justify-center`}>
                  <GraduationCap className={`w-5 h-5 ${c.text}`} />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white">{edu.degree}</div>
                  <div className={`text-sm ${c.text} mt-0.5`}>{edu.institution}</div>
                  <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-500 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
