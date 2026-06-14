"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import cv from "@/lib/cv-data";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="section-pad relative">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Education"
          title={
            <>
              Academic <span className="gradient-text">foundation</span>
            </>
          }
          subtitle="A finance-focused academic path topped by an MBA in Finance & Accounting."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-5 sm:grid-cols-2"
        >
          {cv.education.map((edu, i) => (
            <motion.div
              key={edu.qualification}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass group relative overflow-hidden rounded-3xl p-7 shadow-card"
            >
              <span className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-accent/10 to-highlight/10 blur-xl transition-opacity group-hover:opacity-80" />
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-highlight text-white shadow-glow">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1.5 text-xs font-bold text-accent">
                  <Award className="h-3.5 w-3.5" />
                  {edu.result}
                </span>
              </div>
              <h3 className="font-display mt-5 text-lg font-bold leading-snug">
                {edu.qualification}
              </h3>
              <p className="text-muted mt-1 text-sm font-medium">
                {edu.institution}
              </p>
              <p className="text-muted mt-3 text-xs uppercase tracking-wider">
                {edu.period}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
