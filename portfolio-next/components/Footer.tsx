"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative border-t border-white/5 py-12 text-center"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#39ff14]/25 to-transparent" />
      <p className="font-mono text-xs text-zinc-600">
        <span className="text-zinc-500">© {new Date().getFullYear()}</span>{" "}
        <span className="text-zinc-400">Saif Salmani</span>
        <span className="text-zinc-600"> — built with Next.js · Motion · Three.js</span>
      </p>
    </motion.footer>
  );
}
