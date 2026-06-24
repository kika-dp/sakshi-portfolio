"use client";

import { motion } from "framer-motion";
import { Quote, Globe, Languages, BadgeCheck } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import cv from "@/lib/cv-data";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-xl">
        <SectionHeader
          eyebrow="About"
          title={
            <>
              Finance as a source of <span className="gradient-text">clarity</span>
            </>
          }
          subtitle="The story behind the numbers — and how I work."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="glass rounded-3xl p-7 shadow-card sm:p-10"
          >
            {cv.about.narrative.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className={`leading-relaxed ${
                  i === 0
                    ? "text-lg font-medium text-[var(--text)] sm:text-xl"
                    : "text-muted mt-5 text-[15px] sm:text-base"
                }`}
              >
                {para}
              </motion.p>
            ))}

            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-2.5">
              {cv.about.facts.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/5 px-3.5 py-1.5 text-xs font-semibold text-accent"
                >
                  <BadgeCheck className="h-3.5 w-3.5" />
                  {f}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex items-start gap-3 rounded-2xl border border-accent/20 bg-accent/5 p-5"
            >
              <Quote className="h-6 w-6 shrink-0 text-accent" />
              <p className="font-display text-base font-semibold italic sm:text-lg">
                {cv.about.philosophy}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex flex-col gap-6"
          >
            <motion.div
              variants={fadeUp}
              className="glass rounded-3xl p-7 shadow-card"
            >
              <Languages className="h-6 w-6 text-highlight" />
              <h3 className="font-display mt-4 text-lg font-semibold">
                Languages
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cv.languages.map((l) => (
                  <span
                    key={l}
                    className="rounded-full border px-3 py-1.5 text-xs font-medium"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="glass flex-1 rounded-3xl p-7 shadow-card"
            >
              <Globe className="h-6 w-6 text-accent" />
              <h3 className="font-display mt-4 text-lg font-semibold">
                Core Competencies
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cv.competencies.slice(0, 7).map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-gradient-to-r from-accent/10 to-highlight/10 px-3 py-1.5 text-xs font-medium"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
