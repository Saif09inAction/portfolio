"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { useState } from "react";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const lenis = useLenis();
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el && lenis) {
      lenis.scrollTo(el, { offset: -88, duration: 1.2 });
    } else if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-1/2 top-6 z-[80] w-[min(92vw,1100px)] -translate-x-1/2"
    >
      <motion.nav
        className="glass-panel flex items-center justify-between gap-3 rounded-full px-4 py-2.5 shadow-lg shadow-black/40 sm:px-5 sm:py-3"
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{
          boxShadow:
            "0 12px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(57,255,20,0.12)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
      >
        <button
          type="button"
          onClick={() => scrollTo("#home")}
          className="group flex items-center gap-2 font-semibold tracking-tight transition-transform hover:scale-105"
          aria-label="Home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#00f5d4] to-[#bf5fff] text-sm font-bold text-black">
            S
          </span>
          <span className="hidden sm:inline">Saif</span>
        </button>
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => scrollTo(link.href)}
                className="rounded-full px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-[#39ff14]"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollTo("#contact")}
            className="hidden rounded-full bg-gradient-to-r from-[#39ff14]/20 to-[#bf5fff]/20 px-4 py-2 text-sm font-medium text-zinc-100 ring-1 ring-white/10 transition hover:ring-[#39ff14]/40 sm:inline-flex"
          >
            Let&apos;s talk
          </button>
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 lg:hidden"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span
              className={`block h-0.5 w-5 bg-zinc-300 transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-0.5 w-5 bg-zinc-300 transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-5 bg-zinc-300 transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-3 glass-panel rounded-2xl p-4 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 hover:bg-white/5 hover:text-[#39ff14]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("#contact")}
                  className="mt-2 w-full rounded-xl bg-gradient-to-r from-[#39ff14]/20 to-[#bf5fff]/20 py-3 text-sm font-medium"
                >
                  Let&apos;s talk
                </button>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
