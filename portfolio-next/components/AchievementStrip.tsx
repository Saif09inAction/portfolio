"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Achievement } from "@/lib/data";

function AchievementThumb({ src, alt }: { src: string; alt: string }) {
  const [broken, setBroken] = useState(false);
  if (broken) {
    return (
      <div className="flex h-full min-h-[140px] w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950 text-xs text-zinc-500">
        Image
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
      decoding="async"
      onError={() => setBroken(true)}
    />
  );
}

export function AchievementStrip({
  title,
  items,
}: {
  title: string;
  items: Achievement[];
}) {
  const reduce = useReducedMotion();
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (!e.shiftKey) return;
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div>
      <motion.h3
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 px-4 text-center text-xl font-semibold md:text-left md:px-0"
      >
        {(() => {
          const parts = title.split(" & ");
          if (parts.length > 1) {
            return (
              <>
                <span className="text-gradient">{parts[0]}</span>
                <span className="text-zinc-500"> & </span>
                <span className="text-zinc-300">{parts.slice(1).join(" & ")}</span>
              </>
            );
          }
          return <span className="text-gradient">{title}</span>;
        })()}
      </motion.h3>
      <div
        ref={scrollerRef}
        className="carousel-scroll flex snap-x gap-4 overflow-x-auto px-4 pb-4 md:px-0"
      >
        {items.map((a, i) => (
          <motion.article
            key={a.id}
            data-achievement-card
            initial={{ opacity: 0, x: 28, rotateY: 8 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.06, type: "spring", stiffness: 260, damping: 26 }}
            whileHover={
              reduce
                ? { y: -4 }
                : { y: -8, rotateY: -3, rotateX: 3, transition: { type: "spring", stiffness: 320, damping: 22 } }
            }
            style={{ transformStyle: "preserve-3d" }}
            className="group relative flex w-[min(88vw,340px)] flex-shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b from-white/[0.07] to-white/[0.02] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.55)] backdrop-blur-md"
          >
            <div className="pointer-events-none absolute inset-x-5 top-0 z-10 h-px rounded-full bg-gradient-to-r from-transparent via-[#00f5d4]/60 to-transparent" />
            <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-zinc-900 card-media-shine">
              <AchievementThumb src={a.thumbnail} alt={a.name} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#39ff14]/5 to-[#bf5fff]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h4 className="text-base font-semibold text-white">{a.name}</h4>
              <p className="mt-1 text-sm text-[#00f5d4]/90">{a.platform}</p>
              <p className="mt-2 text-xs text-zinc-500">{a.year}</p>
              <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-zinc-400">{a.description}</p>
              {a.linkedinUrl ? (
                <a
                  href={a.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-xs font-medium text-[#bf5fff] hover:underline"
                >
                  LinkedIn →
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
