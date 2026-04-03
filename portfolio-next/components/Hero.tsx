"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { hero, siteImages } from "@/lib/data";
import { HeroBackground } from "./HeroBackground";
import { HeroDevShowcase } from "./HeroDevShowcase";

const letterContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.028, delayChildren: 0.15 },
  },
};

const letterItem = {
  hidden: { opacity: 0, y: 24, rotateX: -70 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function SplitText({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span
      className={className}
      variants={letterContainer}
      initial="hidden"
      animate="show"
      style={{ display: "inline-block" }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          variants={letterItem}
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char === " " ? "\u00a0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const portraitRef = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 100, damping: 22 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 100, damping: 22 });

  useEffect(() => {
    const el = portraitRef.current;
    if (!el) return;
    const rect = () => el.getBoundingClientRect();
    const onMove = (e: MouseEvent) => {
      const r = rect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      rotateY.set(px * 10);
      rotateX.set(-py * 8);
    };
    const reset = () => {
      rotateX.set(0);
      rotateY.set(0);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, [rotateX, rotateY]);

  const glowOpacity = useTransform(rotateX, [-8, 8], [0.45, 0.95]);

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-y-visible pt-24 pb-12 sm:pt-28 sm:pb-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(57,255,20,0.12),transparent),radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(191,95,255,0.08),transparent),radial-gradient(ellipse_50%_40%_at_0%_80%,rgba(0,245,212,0.06),transparent)]" />
      <HeroBackground />
      <HeroDevShowcase />

      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-8 overflow-visible px-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)] lg:items-center lg:gap-8 lg:px-8 xl:gap-10">
        {/* Left: copy */}
        <div
          className="order-1 min-w-0 text-center lg:py-6 lg:text-left"
          style={{ perspective: "1400px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 font-mono text-[11px] leading-relaxed text-zinc-500 sm:text-xs lg:text-left"
          >
            <span className="text-[#39ff14]/85">&lt;</span>
            <span className="text-zinc-300">Frontend</span>
            <span className="text-[#bf5fff]/90">Craft</span>
            <span className="text-[#39ff14]/85"> /&gt;</span>
            <span className="mt-1 block text-[10px] text-zinc-600 sm:inline sm:mt-0 sm:pl-2">
              motion · responsive UI · WebGL layers
            </span>
          </motion.div>
          <motion.h1
            className="font-semibold leading-[1.05] tracking-tight"
            initial={false}
            style={{ transformStyle: "preserve-3d" }}
          >
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[2.75rem] xl:text-7xl">
              <SplitText text={hero.line1} />
            </span>
            <motion.span
              className="mt-2 block text-4xl sm:text-5xl md:text-6xl lg:text-[2.75rem] xl:text-7xl text-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              {hero.line2}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mt-3 block text-2xl text-zinc-400 sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl"
            >
              {hero.line3}
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="mt-6 text-lg text-zinc-500"
          >
            {hero.sub}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.45, duration: 0.5 }}
            className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <motion.a
              href="#developer"
              className="rounded-full bg-gradient-to-r from-[#39ff14]/25 to-[#00f5d4]/20 px-8 py-3 text-sm font-semibold text-white ring-1 ring-[#39ff14]/40 transition hover:glow-green"
              style={{ transformStyle: "preserve-3d" }}
              whileHover={
                reduceMotion ? { scale: 1.02 } : { scale: 1.04, rotateX: -6, y: -2 }
              }
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              View my work
            </motion.a>
            <motion.a
              href="#contact"
              className="rounded-full glass-panel px-8 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-white/10"
              style={{ transformStyle: "preserve-3d" }}
              whileHover={
                reduceMotion ? { scale: 1.02 } : { scale: 1.04, rotateX: 6, y: -2 }
              }
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 380, damping: 24 }}
            >
              Contact
            </motion.a>
          </motion.div>
        </div>

        {/* Right: portrait — flush to viewport edge, anchored right so crop reads intentional */}
        <motion.div
          ref={portraitRef}
          className="relative order-2 flex min-h-[min(48vh,440px)] w-full items-end justify-center lg:min-h-[min(80vh,720px)] lg:justify-end lg:pl-2 lg:pr-0
            lg:-mr-[max(1rem,calc((100vw-1280px)/2+2rem))] lg:w-[calc(100%+max(0rem,calc((100vw-1280px)/2+2rem)))]"
          style={{
            transformStyle: "preserve-3d",
            perspective: 1200,
          }}
        >
          <motion.div
            style={{ opacity: glowOpacity }}
            className="pointer-events-none absolute bottom-[8%] left-[8%] right-0 top-[18%] rounded-[40%] bg-gradient-to-br from-[#39ff14]/22 via-[#bf5fff]/18 to-[#00f5d4]/12 blur-3xl"
          />
          <motion.div
            className="relative ml-auto w-full max-w-[min(100%,440px)] sm:max-w-[480px] lg:mr-0 lg:max-w-[min(640px,calc(52vw+max(0px,calc((100vw-1280px)/2))))] xl:max-w-[min(700px,calc(54vw+max(0px,calc((100vw-1280px)/2))))]"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={siteImages.heroPortrait}
              alt={siteImages.heroAlt}
              className="h-auto w-full object-contain object-right-bottom drop-shadow-[0_0_40px_rgba(57,255,20,0.1)]"
              width={900}
              height={1200}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
