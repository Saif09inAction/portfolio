"use client";

import { CustomCursor } from "./CustomCursor";
import { Navbar } from "./Navbar";
import { LenisProvider } from "./providers/LenisProvider";
import { ScrollProgress } from "./ScrollProgress";

export function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      {children}
    </LenisProvider>
  );
}
