"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import cv from "@/lib/cv-data";
import SectionHeader from "./SectionHeader";
import Icon from "./Icon";

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(20,184,166,0.06), transparent)",
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

              <div className="mt-6 space-y-4">
                {cat.skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{s.name}</span>
                      <span className="text-muted text-xs tabular-nums">
                        {s.level}%
                      </span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-[var(--border)]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-accent to-highlight"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
