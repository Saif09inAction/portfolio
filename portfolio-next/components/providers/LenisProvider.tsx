"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

/** Smooth vertical scrolling site-wide; use data-lenis-prevent on horizontal strips. */
export function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.085,
        smoothWheel: true,
        wheelMultiplier: 0.9,
      }}
    >
      {children}
    </ReactLenis>
  );
}
