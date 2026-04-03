"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ideas } from "@/lib/data";

const statusStyle = {
  Idea: "border-violet-500/45 bg-violet-500/12 text-violet-200 shadow-[0_0_20px_rgba(139,92,246,0.12)]",
  "In Progress":
    "border-amber-500/45 bg-amber-500/12 text-amber-100 shadow-[0_0_20px_rgba(245,158,11,0.1)]",
  Built: "border-emerald-500/45 bg-emerald-500/12 text-emerald-200 shadow-[0_0_20px_rgba(52,211,153,0.12)]",
} as const;

export function IdeasSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="ideas"
      className="section-mesh-bg relative border-t border-white/5 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold md:text-5xl"
        >
          <span className="text-gradient">Ideas</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mx-auto mt-4 max-w-xl text-center text-zinc-500"
        >
          {ideas.subtitle}
        </motion.p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 [perspective:1600px]">
          {ideas.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.07, type: "spring", stiffness: 200, damping: 22 }}
              whileHover={
                reduce
                  ? { y: -4 }
                  : {
                      y: -10,
                      rotateX: -6,
                      rotateY: 4,
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 320, damping: 20 },
                    }
              }
              style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b from-white/[0.09] to-white/[0.02] p-6 shadow-[0_24px_56px_-20px_rgba(0,0,0,0.55)] backdrop-blur-md"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#39ff14]/0 via-[#bf5fff]/70 to-[#00f5d4]/0 opacity-80" />
              <span className="absolute right-4 top-4 font-mono text-[10px] text-zinc-600 opacity-60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${statusStyle[card.status]}`}
              >
                {card.status}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{card.problem}</p>
              <div className="pointer-events-none absolute -bottom-6 left-1/2 h-20 w-[80%] -translate-x-1/2 rounded-full bg-[#bf5fff]/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
