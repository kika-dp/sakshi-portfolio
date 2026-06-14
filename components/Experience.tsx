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
          {/* Timeline rail */}
          <div className="absolute left-[19px] top-2 h-full w-px bg-gradient-to-b from-accent via-highlight to-transparent md:left-1/2" />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex flex-col gap-10 md:gap-16"
          >
            {cv.experience.map((job, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={job.company}
                  variants={fadeUp}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                    left ? "" : "md:[direction:rtl]"
                  }`}
                >
                  {/* Node */}
                  <span className="absolute left-[11px] top-2 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-accent to-highlight ring-4 ring-[var(--bg)] md:left-1/2 md:-translate-x-1/2">
                    {job.current && (
                      <span className="absolute h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    )}
                  </span>

                  <div
                    className={`ml-12 md:ml-0 ${
                      left ? "md:text-right" : "md:[direction:ltr] md:col-start-2"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="glass rounded-3xl p-6 text-left shadow-card sm:p-7"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-highlight/15">
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

                      <div className="mt-4 flex items-center gap-2">
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

                      <ul className="mt-4 space-y-2.5">
                        {job.highlights.map((h, k) => (
                          <li key={k} className="flex gap-2.5 text-sm">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            <span className="text-muted leading-relaxed">
                              {h}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
