"use client";

import { motion, useReducedMotion } from "framer-motion";
import { about, resumeUrl, siteImages } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function AboutSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="about"
      className="section-mesh-bg relative border-t border-white/5 bg-[#050508] py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-4 md:grid-cols-2 md:px-8 md:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative [perspective:1400px]"
        >
          <motion.div
            className="glass-panel relative aspect-[4/5] max-h-[520px] overflow-hidden rounded-3xl border border-white/10 shadow-[0_32px_64px_-20px_rgba(0,0,0,0.7)]"
            whileHover={reduce ? undefined : { rotateY: 4, rotateX: -3 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              className="relative h-full w-full overflow-hidden"
              whileHover={reduce ? undefined : { scale: 1.03 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={siteImages.aboutPortrait}
                alt={siteImages.aboutAlt}
                className="h-full w-full object-cover object-top"
                width={600}
                height={750}
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-[#050508]/85 via-transparent to-[#00f5d4]/5" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#39ff14]/50 to-transparent" />
          </motion.div>
          <div className="pointer-events-none absolute -right-4 -top-4 h-28 w-28 rounded-full bg-[#39ff14]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-[#bf5fff]/20 blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <motion.h2
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl font-bold md:text-5xl"
          >
            <span className="text-gradient">About</span>
          </motion.h2>
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-zinc-400"
            >
              {p}
            </motion.p>
          ))}
          <motion.div
            custom={about.paragraphs.length + 1}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={reduce ? undefined : { scale: 1.015, y: -4 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent p-6 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.5)] backdrop-blur-md"
          >
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#00f5d4]/15 blur-2xl" />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#00f5d4]">
              Education
            </h3>
            <h4 className="mt-3 text-xl font-semibold text-white">{about.education.title}</h4>
            <p className="mt-1 text-zinc-500">📍 {about.education.place}</p>
            <p className="mt-1 text-sm text-zinc-600">📅 {about.education.period}</p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">{about.education.body}</p>
          </motion.div>
          <motion.div
            custom={about.paragraphs.length + 2}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Key achievements
            </h3>
            <ul className="mt-4 space-y-3">
              {about.keyAchievements.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={reduce ? undefined : { x: 4 }}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.03] py-3 pl-4 pr-3 text-sm text-zinc-400 shadow-sm transition-colors hover:border-[#39ff14]/25 hover:text-zinc-200"
                >
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#39ff14] shadow-[0_0_8px_#39ff14]" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.p
            custom={about.paragraphs.length + 3}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-sm leading-relaxed text-zinc-500"
          >
            {about.skillsSummary}
          </motion.p>
          <motion.a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={reduce ? { scale: 1.02 } : { scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#39ff14]/28 to-[#bf5fff]/22 px-8 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:ring-[#39ff14]/45 hover:shadow-[0_0_32px_rgba(57,255,20,0.15)]"
          >
            Download resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
