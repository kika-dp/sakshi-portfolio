"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2, Building2 } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import cv from "@/lib/cv-data";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Experience"
          title={
            <>
              A track record of <span className="gradient-text">ownership</span>
            </>
          }
          subtitle="Four years of progressive responsibility across accounting, compliance and reporting."
        />

        <div className="relative mt-16">
          {/* Horizontal connector rail (desktop) */}
          <div className="absolute left-0 right-0 top-[14px] hidden h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent md:block" />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid gap-8 md:grid-cols-2 md:gap-8"
          >
            {cv.experience.map((job) => (
              <motion.div
                key={job.company}
                variants={fadeUp}
                className="relative flex flex-col"
              >
                {/* Timeline node */}
                <div className="mb-6 flex items-center gap-3 md:justify-center">
                  <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-accent to-highlight ring-4 ring-[var(--bg)]">
                    {job.current && (
                      <span className="absolute h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                    )}
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold md:hidden ${
                      job.current
                        ? "bg-accent/15 text-accent"
                        : "bg-[var(--border)] text-muted"
                    }`}
                  >
                    <Briefcase className="h-3 w-3" />
                    {job.start} — {job.end}
                  </span>
                </div>

                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="glass flex h-full flex-col rounded-3xl p-6 shadow-card sm:p-8"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-highlight/15">
                        <Building2 className="h-5 w-5 text-accent" />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-bold leading-tight">
                          {job.position}
                        </h3>
                        <p className="text-sm font-medium text-accent">
                          {job.company}
                        </p>
                      </div>
                    </div>
                    {job.current && (
                      <span className="hidden shrink-0 items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-[11px] font-semibold text-accent sm:inline-flex">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Current
                      </span>
                    )}
                  </div>

                  <div className="mt-4 hidden md:block">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                        job.current
                          ? "bg-accent/15 text-accent"
                          : "bg-[var(--border)] text-muted"
                      }`}
                    >
                      <Briefcase className="h-3 w-3" />
                      {job.start} — {job.end}
                    </span>
                  </div>

                  <p className="text-muted mt-4 text-sm leading-relaxed">
                    {job.summary}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {job.highlights.map((h, k) => (
                      <li key={k} className="flex gap-2.5 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span className="text-muted leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
