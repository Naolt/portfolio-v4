"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/resume";
import GradientMesh from "./GradientMesh";
import MagneticButton from "./MagneticButton";

function SplitText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-flex flex-wrap justify-center">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={char === " " ? "mr-3" : ""}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

function TypewriterText({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  return (
    <span className="inline-flex flex-wrap justify-center">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.02, delay: delay + i * 0.05 }}
          className={char === " " ? "mr-1.5" : ""}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      <motion.span
        className="ml-0.5 inline-block h-[1em] w-[2px] bg-indigo-400"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  );
}

export default function Hero() {
  const nameDelay = 0.3;
  const titleDelay = nameDelay + personalInfo.name.length * 0.03 + 0.3;
  const taglineDelay = titleDelay + personalInfo.title.length * 0.05 + 0.5;
  const buttonDelay = taglineDelay + 0.5;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <GradientMesh />

      <div className="relative z-10 text-center">
        {/* Name */}
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
          <SplitText text={personalInfo.name} delay={nameDelay} />
        </h1>

        {/* Title with typewriter */}
        <div className="mb-6 text-xl text-slate-300 md:text-2xl lg:text-3xl">
          <TypewriterText text={personalInfo.title} delay={titleDelay} />
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: taglineDelay }}
          className="mx-auto mb-10 max-w-xl text-lg text-slate-400"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: buttonDelay }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="#contact">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition-shadow hover:shadow-indigo-500/40">
              Get In Touch
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </MagneticButton>
          <MagneticButton href={personalInfo.resumeUrl}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-white/20 hover:bg-white/10">
              Download Resume
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </span>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: buttonDelay + 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest text-slate-500 uppercase">
            Scroll
          </span>
          <svg
            className="h-5 w-5 text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
