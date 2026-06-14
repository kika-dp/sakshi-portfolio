"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import cv from "@/lib/cv-data";
import SectionHeader from "./SectionHeader";
import Icon from "./Icon";

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad relative">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(56,189,248,0.07), transparent)",
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
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cv.achievements.map((a) => (
            <motion.div
              key={a.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass group relative overflow-hidden rounded-3xl p-7 shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/15 to-highlight/15 transition-transform duration-300 group-hover:scale-110">
                <Icon name={a.icon} className="h-6 w-6 text-accent" />
              </span>
              <h3 className="font-display mt-5 text-base font-bold">
                {a.title}
              </h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">
                {a.detail}
              </p>
              <span className="mt-5 block h-1 w-12 rounded-full bg-gradient-to-r from-accent to-highlight transition-all duration-300 group-hover:w-20" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
