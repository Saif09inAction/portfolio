import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Pin Turbopack root so builds don’t pick a parent lockfile on Vercel/monorepos */
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
