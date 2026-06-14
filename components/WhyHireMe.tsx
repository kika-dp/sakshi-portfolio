"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import cv from "@/lib/cv-data";
import SectionHeader from "./SectionHeader";
import Icon from "./Icon";

export default function WhyHireMe() {
  return (
    <section id="why" className="section-pad relative">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Why Hire Me"
          title={
            <>
              The value I <span className="gradient-text">bring</span>
            </>
          }
          subtitle="What you can expect when I join the team."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {cv.whyHireMe.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative overflow-hidden rounded-3xl border bg-gradient-to-br from-[var(--bg-soft)] to-transparent p-7 shadow-card"
            >
              <span className="font-display absolute right-5 top-4 text-5xl font-bold text-accent/10 transition-colors group-hover:text-accent/20">
                0{i + 1}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-highlight text-white shadow-glow">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <h3 className="font-display mt-5 text-lg font-bold">
                {item.title}
              </h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
