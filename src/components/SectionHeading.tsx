"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      <h2 className="mb-4 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-slate-400">{subtitle}</p>}
      <motion.div
        className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.div>
  );
}
