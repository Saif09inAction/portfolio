"use client";

import { motion } from "framer-motion";
import {
  achievements,
  developerOverview,
  projects,
} from "@/lib/data";
import { AchievementStrip } from "./AchievementStrip";
import { DiscoverCarousel } from "./DiscoverCarousel";

const devProjects = projects.filter((p) => p.type === "developer");
const devAchievements = achievements.filter((a) => a.type === "developer");

export function SectionDeveloper() {
  return (
    <section
      id="developer"
      className="section-mesh-bg relative border-t border-white/5 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-center text-4xl font-bold tracking-tight md:text-left md:text-5xl">
            <span className="text-gradient">Developer</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-zinc-400 md:mx-0 md:text-left"
          >
            {developerOverview}
          </motion.p>
        </motion.div>

        <div className="mt-16">
          <DiscoverCarousel
            title="Discover my work"
            subtitle="Starts on a middle project. Drag or trackpad-swipe sideways; Shift + scroll pans the row. Normal wheel scroll moves the page."
            projects={devProjects}
          />
        </div>

        <div className="mt-24">
          <AchievementStrip title="Achievements & hackathons" items={devAchievements} />
        </div>
      </div>
    </section>
  );
}
