"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/resume";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  { label: "Languages", items: skills.languages, color: "from-blue-500 to-cyan-500" },
  { label: "Frontend", items: skills.frontend, color: "from-indigo-500 to-purple-500" },
  { label: "Backend", items: skills.backend, color: "from-purple-500 to-pink-500" },
  { label: "AI / ML", items: skills.ai, color: "from-pink-500 to-rose-500" },
  { label: "Tools", items: skills.tools, color: "from-amber-500 to-orange-500" },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About Me" />

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-6 text-lg leading-relaxed text-slate-300">
              Full-Stack Developer and AI Engineer with experience building{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                production systems
              </span>{" "}
              across the stack — from Next.js frontends to Django APIs to{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                LLM-powered pipelines
              </span>{" "}
              with LangChain and LangGraph.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-slate-400">
              I&apos;m an A2SV fellow (top 1% of applicants, Google-backed),
              solved 600+ problems on LeetCode, and hold a BSc in Software
              Engineering with a 3.63 GPA and Presidential Award.
            </p>
            <p className="text-lg leading-relaxed text-slate-400">
              Currently building medical document processing APIs and AI
              pipelines at Hydrus.ai. Previously cut LLM costs by 67% at Fluid
              AI and led frontend development at Eskalate.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {skillCategories.map((cat, catIndex) => (
              <div key={cat.label}>
                <h3 className={`mb-3 bg-gradient-to-r ${cat.color} bg-clip-text text-sm font-semibold tracking-wider text-transparent uppercase`}>
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: catIndex * 0.1 + i * 0.05,
                      }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)",
                      }}
                      className="cursor-default rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm text-slate-300 transition-colors hover:border-indigo-500/30 hover:text-white"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
