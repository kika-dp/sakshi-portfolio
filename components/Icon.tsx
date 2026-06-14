"use client";

import * as Lucide from "lucide-react";
import type { LucideProps } from "lucide-react";

/** Render a Lucide icon by its string name (icon names live in the CV data file). */
export default function Icon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const Cmp =
    (Lucide as unknown as Record<string, React.ComponentType<LucideProps>>)[
      name
    ] ?? Lucide.Sparkles;
  return <Cmp {...props} />;
}
