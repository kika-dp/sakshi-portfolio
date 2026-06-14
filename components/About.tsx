"use client";

import { motion } from "framer-motion";
import { Quote, Globe, Languages } from "lucide-react";
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
                className={`text-[15px] leading-relaxed sm:text-base ${
                  i === 0 ? "text-[var(--text)]" : "text-muted"
                } ${i > 0 ? "mt-5" : ""}`}
              >
                {para}
              </motion.p>
            ))}

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
