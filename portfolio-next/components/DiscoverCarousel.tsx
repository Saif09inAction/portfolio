"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/lib/data";

type Props = {
  id?: string;
  title: string;
  subtitle?: string;
  projects: Project[];
  /** Center viewport between two cards (e.g. [0, 1] so the first two reels sit around the middle). */
  initialCenterBetween?: readonly [number, number];
};

function ProjectThumb({ src, alt }: { src: string; alt: string }) {
  const [broken, setBroken] = useState(false);
  if (broken) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950 text-xs text-zinc-500">
        Preview
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover"
      onError={() => setBroken(true)}
      loading="lazy"
      decoding="async"
    />
  );
}

function ProjectMedia({ project, alt }: { project: Project; alt: string }) {
  if (project.videoSrc) {
    return (
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={project.videoSrc}
        poster={project.thumbnail || undefined}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        aria-label={alt}
      />
    );
  }
  return <ProjectThumb src={project.thumbnail} alt={alt} />;
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal-item",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.07,
          duration: 0.55,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }, contentRef);
    return () => ctx.revert();
  }, [project.id]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <motion.div
      key={project.id}
      className="fixed inset-0 z-[280] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/88 backdrop-blur-md"
        aria-label="Close project"
        onClick={onClose}
      />
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal
        aria-labelledby="project-title"
        className="relative z-10 flex max-h-[min(92vh,900px)] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#07070c] shadow-2xl shadow-[#39ff14]/10"
        initial={{ rotateY: 72, scale: 0.86, opacity: 0 }}
        animate={{ rotateY: 0, scale: 1, opacity: 1 }}
        exit={{ rotateY: -40, scale: 0.88, opacity: 0 }}
        transition={{ type: "spring", damping: 32, stiffness: 140 }}
        style={{ transformStyle: "preserve-3d", perspective: 1400 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-end border-b border-white/10 bg-[#07070c]/95 px-3 py-3 backdrop-blur-md">
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-xl text-zinc-100 transition hover:border-[#39ff14]/60 hover:bg-black/80"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div
          ref={contentRef}
          data-lenis-prevent
          className="modal-scroll min-h-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-contain"
        >
          <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-zinc-900">
            <div className="relative h-full min-h-[200px] w-full overflow-hidden">
              {project.videoSrc ? (
                <video
                  key={project.id}
                  className="h-full w-full object-contain"
                  src={project.videoSrc}
                  poster={project.thumbnail || undefined}
                  controls
                  playsInline
                  preload="metadata"
                />
              ) : (
                <ProjectThumb src={project.thumbnail} alt={project.title} />
              )}
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07070c] via-transparent to-transparent" />
          </div>
          <div className="space-y-6 px-6 py-8 md:px-10 md:py-10">
            <div>
              <p className="reveal-item mb-2 text-sm uppercase tracking-widest text-[#00f5d4]">
                {project.type === "developer" ? "Development" : "Video & media"}
              </p>
              <h2
                id="project-title"
                className="reveal-item text-3xl font-semibold tracking-tight text-white md:text-4xl"
              >
                {project.title}
              </h2>
              <p className="reveal-item mt-2 text-sm text-zinc-500">{project.date}</p>
            </div>
            <p className="reveal-item text-lg leading-relaxed text-zinc-400">{project.description}</p>
            <div className="reveal-item">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Tech stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#bf5fff]/30 bg-[#bf5fff]/10 px-3 py-1 text-xs text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="reveal-item flex flex-wrap gap-4 pt-2 pb-4">
              {project.siteUrl ? (
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gradient-to-r from-[#39ff14]/30 to-[#00f5d4]/25 px-6 py-3 text-sm font-semibold text-white ring-1 ring-[#39ff14]/40 transition hover:glow-green"
                >
                  {project.type === "editor" ? "View reel" : "Live site"}
                </a>
              ) : null}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full glass-panel px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-white/10"
                >
                  GitHub
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectOverlay({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {project ? <ProjectModal key={project.id} project={project} onClose={onClose} /> : null}
    </AnimatePresence>,
    document.body
  );
}

export function DiscoverCarousel({
  id,
  title,
  subtitle,
  projects,
  initialCenterBetween,
}: Props) {
  const reduceMotion = useReducedMotion();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const didInitialCenterRef = useRef(false);
  const defaultMid = projects.length ? Math.floor((projects.length - 1) / 2) : 0;
  const pair = initialCenterBetween;
  const pairValid =
    !!pair &&
    pair[0] >= 0 &&
    pair[1] >= 0 &&
    pair[0] < projects.length &&
    pair[1] < projects.length;
  const initialIdx =
    pairValid && pair
      ? Math.round((pair[0] + pair[1]) / 2)
      : defaultMid;
  const [activeIdx, setActiveIdx] = useState(initialIdx);
  const [focusStrengths, setFocusStrengths] = useState<number[]>(() => projects.map(() => 0));
  const [selected, setSelected] = useState<Project | null>(null);

  const updateActive = useCallback(() => {
    const c = scrollerRef.current;
    if (!c) return;
    const cr = c.getBoundingClientRect();
    const centerX = cr.left + cr.width / 2;
    const maxD = Math.max(cr.width * 0.48, 260);
    const cards = c.querySelectorAll<HTMLElement>("[data-proj-card]");
    const strengths: number[] = [];
    let best = 0;
    let bestD = Infinity;

    cards.forEach((card, i) => {
      const r = card.getBoundingClientRect();
      const mid = (r.left + r.right) / 2;
      const d = Math.abs(mid - centerX);
      const t = Math.max(0, 1 - d / maxD);
      strengths.push(t);
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    });

    setFocusStrengths(strengths);
    setActiveIdx(best);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const centerCardAtIndex = (index: number) => {
      const cards = el.querySelectorAll<HTMLElement>("[data-proj-card]");
      const card = cards[index];
      if (!card) return;
      const target =
        card.offsetLeft + card.offsetWidth / 2 - el.clientWidth / 2;
      el.scrollLeft = Math.max(
        0,
        Math.min(target, el.scrollWidth - el.clientWidth)
      );
    };

    const centerBetweenIndexes = (a: number, b: number) => {
      const cards = el.querySelectorAll<HTMLElement>("[data-proj-card]");
      const ca = cards[a];
      const cb = cards[b];
      if (!ca || !cb) return;
      const midA = ca.offsetLeft + ca.offsetWidth / 2;
      const midB = cb.offsetLeft + cb.offsetWidth / 2;
      const between = (midA + midB) / 2;
      const target = between - el.clientWidth / 2;
      el.scrollLeft = Math.max(
        0,
        Math.min(target, el.scrollWidth - el.clientWidth)
      );
    };

    const syncPad = () => {
      const w = el.clientWidth;
      const cardW = Math.min(w * 0.85, 320);
      const pad = Math.max(16, (w - cardW) / 2);
      el.style.paddingLeft = `${pad}px`;
      el.style.paddingRight = `${pad}px`;
      requestAnimationFrame(() => {
        if (!didInitialCenterRef.current && projects.length > 0) {
          didInitialCenterRef.current = true;
          if (
            pair &&
            pair[0] >= 0 &&
            pair[1] >= 0 &&
            pair[0] < projects.length &&
            pair[1] < projects.length
          ) {
            centerBetweenIndexes(pair[0], pair[1]);
          } else {
            centerCardAtIndex(defaultMid);
          }
        }
        updateActive();
      });
    };

    const ro = new ResizeObserver(syncPad);
    ro.observe(el);
    syncPad();

    const onScroll = () => updateActive();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", syncPad);

    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", syncPad);
      didInitialCenterRef.current = false;
    };
  }, [
    updateActive,
    projects.length,
    defaultMid,
    pair?.[0],
    pair?.[1],
  ]);

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
    <div id={id} className="relative">
      <div className="mb-10 px-4 text-center md:px-8 md:text-left">
        <motion.h2
          initial={
            reduceMotion ? { opacity: 0, y: 16 } : { opacity: 0, y: 24, filter: "blur(6px)" }
          }
          whileInView={
            reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, filter: "blur(0px)" }
          }
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl font-bold tracking-tight md:text-5xl"
        >
          <span className="text-gradient">{title}</span>
        </motion.h2>
        {subtitle ? (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.45 }}
            className="mt-3 max-w-2xl text-zinc-500"
          >
            {subtitle}
          </motion.p>
        ) : null}
      </div>

      <div
        ref={scrollerRef}
        className="carousel-scroll flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 pt-4 md:gap-8 md:pb-12"
        style={{ scrollbarGutter: "stable" }}
      >
        {projects.map((p, i) => {
          const t = focusStrengths[i] ?? 0;
          const offset = i - activeIdx;
          const scale = 0.9 + t * 0.14;
          const rotateY = offset * -9 * (1 - t * 0.85);
          const blur = (1 - t) * 2.8;
          const opacity = 0.58 + t * 0.42;
          const isHot = t > 0.55;

          return (
            <motion.article
              key={p.id}
              data-proj-card
              className="group relative w-[min(85vw,320px)] flex-shrink-0 snap-center cursor-pointer"
              style={{ perspective: 1200 }}
              initial={false}
              animate={{
                scale,
                rotateY,
                filter: `blur(${blur}px)`,
                opacity,
              }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
              onClick={() => setSelected(p)}
            >
              <div
                className={`relative overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b from-white/[0.08] to-white/[0.02] shadow-[0_24px_56px_-16px_rgba(0,0,0,0.65)] backdrop-blur-md transition-[box-shadow,transform] duration-300 ${
                  isHot
                    ? "glow-green ring-1 ring-[#39ff14]/40 shadow-[0_0_40px_-8px_rgba(57,255,20,0.25)]"
                    : "ring-0 ring-transparent"
                }`}
              >
                <div className="pointer-events-none absolute inset-x-6 top-0 z-10 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#39ff14]/70 to-transparent opacity-70" />
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#bf5fff]/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900 card-media-shine">
                  <ProjectMedia project={p} alt={p.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00f5d4]/10 via-transparent to-[#bf5fff]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-3 left-3 right-3 z-[3]">
                    <h3 className="text-lg font-semibold tracking-tight text-white drop-shadow-lg">
                      {p.title}
                    </h3>
                  </div>
                </div>
                <div className="relative space-y-3 p-4">
                  <p className="line-clamp-2 text-sm leading-relaxed text-zinc-400">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/5 bg-white/[0.06] px-2 py-0.5 text-[10px] uppercase tracking-wide text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {p.technologies.length > 4 ? (
                      <span className="text-[10px] text-zinc-600">+{p.technologies.length - 4}</span>
                    ) : null}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[#39ff14] transition group-hover:gap-2">
                    {p.videoSrc ? "Open reel" : "Open project"}
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <ProjectOverlay project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
