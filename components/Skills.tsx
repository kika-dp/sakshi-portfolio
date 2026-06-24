"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import cv from "@/lib/cv-data";
import SectionHeader from "./SectionHeader";
import Icon from "./Icon";

/** Translate a numeric proficiency into a premium, certification-style tier label. */
function tier(level: number) {
  if (level >= 92) return { label: "Expert", dots: 3 };
  if (level >= 87) return { label: "Advanced", dots: 2 };
  return { label: "Proficient", dots: 1 };
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(43,163,156,0.08), transparent)",
        }}
      />
      <div className="container-xl">
        <SectionHeader
          eyebrow="Skills"
          title={
            <>
              Capabilities, <span className="gradient-text">categorised</span>
            </>
          }
          subtitle="A balanced toolkit across compliance, reporting and core accounting — with the soft skills to match."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-6 sm:grid-cols-2"
        >
          {cv.skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass rounded-3xl p-7 shadow-card"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-highlight text-white shadow-glow">
                  <Icon name={cat.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold">{cat.title}</h3>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {cat.skills.map((s) => {
                  const t = tier(s.level);
                  return (
                    <span
                      key={s.name}
                      className="group/chip inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-soft)]/60 py-2 pl-3.5 pr-2.5 text-sm font-medium transition-colors hover:border-accent/40"
                    >
                      {s.name}
                      <span className="flex items-center gap-1.5 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
                        <span className="flex gap-0.5">
                          {[0, 1, 2].map((d) => (
                            <span
                              key={d}
                              className={`h-1 w-1 rounded-full ${
                                d < t.dots ? "bg-accent" : "bg-accent/25"
                              }`}
                            />
                          ))}
                        </span>
                        {t.label}
                      </span>
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
