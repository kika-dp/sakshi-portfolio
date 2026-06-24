"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import cv from "@/lib/cv-data";
import SectionHeader from "./SectionHeader";
import Icon from "./Icon";

/**
 * Bento layout: a featured opener (wide) and a full-width closing banner give
 * the grid hierarchy and rhythm, the four standard cards fill the middle.
 */
const SPANS = [
  "sm:col-span-2 lg:col-span-2", // 0 — featured
  "",
  "",
  "",
  "",
  "sm:col-span-2 lg:col-span-3", // 5 — closing banner
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad relative">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(210,136,106,0.08), transparent)",
        }}
      />
      <div className="container-xl">
        <SectionHeader
          eyebrow="Achievements"
          title={
            <>
              Milestones that <span className="gradient-text">matter</span>
            </>
          }
          subtitle="Highlights from the day-to-day — the wins that compound into trust."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid auto-rows-[1fr] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cv.achievements.map((a, i) => {
            const featured = i === 0 || i === 5;
            return (
              <motion.div
                key={a.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`group relative flex flex-col overflow-hidden rounded-3xl p-7 shadow-card ${
                  SPANS[i]
                } ${
                  featured
                    ? "border border-accent/20 bg-gradient-to-br from-accent/10 via-[var(--card)] to-highlight/5"
                    : "glass"
                }`}
              >
                <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-accent/10 to-highlight/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex items-start justify-between">
                  <span
                    className={`flex items-center justify-center rounded-2xl bg-gradient-to-br transition-transform duration-300 group-hover:scale-110 ${
                      featured
                        ? "h-14 w-14 from-accent to-highlight text-white shadow-glow"
                        : "h-12 w-12 from-accent/15 to-highlight/15 text-accent"
                    }`}
                  >
                    <Icon name={a.icon} className={featured ? "h-7 w-7" : "h-6 w-6"} />
                  </span>
                  <ArrowUpRight className="text-muted h-5 w-5 -translate-y-1 translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-accent" />
                </div>

                <h3
                  className={`font-display mt-5 font-bold leading-snug ${
                    featured ? "text-xl sm:text-2xl" : "text-base"
                  }`}
                >
                  {a.title}
                </h3>
                <p
                  className={`text-muted mt-2 leading-relaxed ${
                    featured ? "text-sm sm:text-base sm:max-w-xl" : "text-sm"
                  }`}
                >
                  {a.detail}
                </p>

                <span className="mt-6 block h-1 w-12 rounded-full bg-gradient-to-r from-accent to-highlight transition-all duration-300 group-hover:w-20" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
