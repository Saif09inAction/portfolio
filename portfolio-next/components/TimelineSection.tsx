"use client";

import { motion, useReducedMotion } from "framer-motion";
import { about, achievements } from "@/lib/data";

/** Internships + condensed achievement milestones for a vertical timeline. */
export function TimelineSection() {
  const reduce = useReducedMotion();
  const devAchievements = achievements.filter((a) => a.type === "developer");
  const timelineItems = [
    ...about.internships.map((x, i) => ({
      id: `int-${i}`,
      year: x.period,
      title: x.title,
      body: x.body,
      kind: "experience" as const,
    })),
    ...devAchievements.slice(0, 6).map((a) => ({
      id: a.id,
      year: a.year,
      title: a.name,
      body: a.description,
      kind: "achievement" as const,
    })),
  ];

  return (
    <section className="section-mesh-bg relative border-t border-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold md:text-5xl"
        >
          <span className="text-gradient">Experience</span>
          <span className="text-zinc-500"> & </span>
          <span className="text-zinc-200">highlights</span>
        </motion.h2>
        <div className="relative mt-16">
          <div className="absolute bottom-2 left-[11px] top-2 w-px overflow-hidden md:left-[15px]">
            <div className="h-full w-full bg-gradient-to-b from-[#39ff14] via-[#bf5fff] to-[#00f5d4] opacity-60" />
            <motion.div
              className="absolute left-0 top-0 w-full bg-gradient-to-b from-white/40 to-transparent"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <ul className="space-y-8">
            {timelineItems.map((item, i) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.06, type: "spring", stiffness: 200, damping: 24 }}
                className="relative pl-10 md:pl-12"
              >
                <span
                  className={`absolute left-0 top-4 z-10 flex h-3 w-3 rounded-full ring-2 ring-[#050508] md:top-5 md:h-3.5 md:w-3.5 ${
                    item.kind === "achievement"
                      ? "bg-[#bf5fff] shadow-[0_0_14px_rgba(191,95,255,0.7)]"
                      : "timeline-node-pulse bg-[#39ff14]"
                  }`}
                />
                <motion.div
                  whileHover={reduce ? undefined : { x: 6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.5)] backdrop-blur-sm"
                >
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      item.kind === "experience" ? "text-[#00f5d4]" : "text-[#bf5fff]"
                    }`}
                  >
                    {item.year}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{item.body}</p>
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
