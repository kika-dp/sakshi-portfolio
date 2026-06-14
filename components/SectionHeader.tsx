"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="font-display mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted mt-4 text-base leading-relaxed sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
