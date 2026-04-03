"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  developerSkillCategories,
  editorSkillCategories,
} from "@/lib/data";

function SkillColumn({
  title,
  categories,
}: {
  title: string;
  categories: typeof developerSkillCategories;
}) {
  const reduce = useReducedMotion();

  return (
    <div>
      <h3 className="mb-8 text-center text-2xl font-bold text-zinc-200 md:text-left">
        {title}
      </h3>
      <div className="space-y-8 [perspective:1200px]">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={
              reduce
                ? undefined
                : {
                    rotateX: -5,
                    rotateY: 5,
                    scale: 1.02,
                    z: 24,
                  }
            }
            style={{ transformStyle: "preserve-3d", transformOrigin: "center top" }}
            className="glass-panel rounded-2xl p-5 shadow-lg shadow-black/20 transition-shadow hover:border-[#39ff14]/25 hover:shadow-[0_20px_50px_rgba(57,255,20,0.06)]"
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <h4 className="font-semibold text-white">{cat.title}</h4>
              <span className="text-xs text-zinc-600">{Math.round(cat.progress * 100)}%</span>
            </div>
            <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-zinc-800">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#00f5d4] via-[#39ff14] to-[#bf5fff]"
                initial={{ width: 0 }}
                whileInView={{ width: `${cat.progress * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-default rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-400 transition-colors hover:border-[#bf5fff]/40 hover:text-zinc-200"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold md:text-5xl"
        >
          <span className="text-gradient">Skills</span>
        </motion.h2>
        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-12">
          <SkillColumn title="Developer" categories={developerSkillCategories} />
          <SkillColumn title="Video & design" categories={editorSkillCategories} />
        </div>
      </div>
    </section>
  );
}
