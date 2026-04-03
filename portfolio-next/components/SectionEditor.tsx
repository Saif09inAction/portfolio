"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { editorOverview, projects } from "@/lib/data";
import { DiscoverCarousel } from "./DiscoverCarousel";

/**
 * Place all `videoSrc` editor reels in the middle of the row (between other projects)
 * so the carousel can open centered on them.
 */
function editorProjectsForCarousel() {
  const editor = projects.filter((p) => p.type === "editor");
  const featured = editor.filter((p) => p.videoSrc);
  const rest = editor.filter((p) => !p.videoSrc);
  if (featured.length === 0) {
    return { list: editor, centerBetween: undefined as readonly [number, number] | undefined };
  }
  const mid = Math.floor(rest.length / 2);
  const list = [...rest.slice(0, mid), ...featured, ...rest.slice(mid)];
  const from = mid;
  const to = mid + featured.length - 1;
  return { list, centerBetween: [from, to] as const };
}

export function SectionEditor() {
  const { list: editProjects, centerBetween } = useMemo(() => editorProjectsForCarousel(), []);
  return (
    <section
      id="editor"
      className="section-mesh-bg border-t border-white/5 bg-[#050508] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-4xl font-bold tracking-tight md:text-left md:text-5xl">
            Video <span className="text-gradient">Editor</span>
          </h2>
        </motion.div>

        <div className="mx-auto mt-10 max-w-4xl space-y-6 text-center md:text-left">
          {editorOverview.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="text-lg leading-relaxed text-zinc-400"
            >
              {para}
            </motion.p>
          ))}
        </div>

        <div className="mt-16">
          <DiscoverCarousel
            title="Editing projects"
            subtitle="Featured reels load in the center — drag or Shift+scroll; tap a card for full video."
            projects={editProjects}
            initialCenterBetween={centerBetween}
          />
        </div>
      </div>
    </section>
  );
}
