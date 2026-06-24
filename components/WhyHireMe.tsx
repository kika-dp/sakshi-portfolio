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
          className="mt-16 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3"
        >
          {cv.whyHireMe.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="group relative"
            >
              {/* Numbered step badge straddling the card top */}
              <span className="font-display absolute -top-6 left-7 z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-highlight text-base font-bold text-white shadow-glow">
                {String(i + 1).padStart(2, "0")}
              </span>

              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass relative h-full overflow-hidden rounded-3xl px-7 pb-7 pt-10 shadow-card"
              >
                {/* Gradient accent rail on top */}
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-highlight to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-highlight/15 text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-bold leading-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-muted mt-4 text-sm leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
