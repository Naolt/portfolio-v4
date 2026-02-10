"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/resume";
import SectionHeading from "./SectionHeading";

function TimelineCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`relative flex w-full items-start gap-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col`}
    >
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-[calc(50%-2rem)]"
      >
        <motion.div
          whileHover={{ y: -4, boxShadow: "0 8px 40px rgba(99, 102, 241, 0.1)" }}
          transition={{ type: "spring", damping: 20 }}
          className="cursor-pointer rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="mb-1 flex items-center gap-2">
            <h3 className="text-lg font-bold text-white">{exp.company}</h3>
            {exp.isCurrent && (
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400">
                Current
              </span>
            )}
          </div>
          <p className="mb-1 text-sm text-indigo-400">{exp.role}</p>
          <p className="mb-4 text-xs text-slate-500">
            {exp.period} &middot; {exp.location}
          </p>

          {/* First bullet always visible */}
          <p className="text-sm leading-relaxed text-slate-400">
            {exp.bullets[0]}
          </p>

          {/* Expandable bullets */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="mt-3 space-y-2">
                  {exp.bullets.slice(1).map((bullet, i) => (
                    <li
                      key={i}
                      className="text-sm leading-relaxed text-slate-400"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-slate-600">{exp.techStack}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {exp.bullets.length > 1 && (
            <button className="mt-3 text-xs text-indigo-400/60 transition-colors hover:text-indigo-400">
              {expanded ? "Show less" : `+${exp.bullets.length - 1} more`}
            </button>
          )}
        </motion.div>
      </motion.div>

      {/* Timeline dot - centered on the line */}
      <div className="absolute left-4 top-6 z-10 md:left-1/2 md:-translate-x-1/2">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring" }}
          className="relative"
        >
          <div
            className={`h-4 w-4 rounded-full border-2 ${
              exp.isCurrent
                ? "border-indigo-500 bg-indigo-500"
                : "border-indigo-500/40 bg-[#0a0f1a]"
            }`}
          />
          {exp.isCurrent && (
            <div className="absolute inset-0 animate-ping rounded-full bg-indigo-500/40" />
          )}
        </motion.div>
      </div>

      {/* Spacer for the other side */}
      <div className="hidden w-[calc(50%-2rem)] md:block" />
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Experience"
          subtitle="Where I've worked and what I've built"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[1.3rem] top-0 h-full w-[2px] bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12 pl-12 md:pl-0">
            {experiences.map((exp, i) => (
              <TimelineCard key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
