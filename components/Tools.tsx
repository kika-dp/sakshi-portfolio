"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport, scaleIn } from "@/lib/motion";
import cv from "@/lib/cv-data";
import SectionHeader from "./SectionHeader";

export default function Tools() {
  return (
    <section id="tools" className="section-pad relative">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Tools & Platforms"
          title={
            <>
              The <span className="gradient-text">stack</span> behind the books
            </>
          }
          subtitle="Cloud ERPs, automation apps and reporting tools used daily to keep finance fast and accurate."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {cv.tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={scaleIn}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl p-6 shadow-card"
            >
              <span className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/0 to-highlight/0 opacity-0 transition-opacity duration-300 group-hover:from-accent/10 group-hover:to-highlight/10 group-hover:opacity-100" />
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/15 to-highlight/15 font-display text-xl font-bold gradient-text transition-transform duration-300 group-hover:scale-110">
                {tool.name.slice(0, 2)}
              </span>
              <div className="text-center">
                <div className="text-sm font-semibold">{tool.name}</div>
                <div className="text-muted text-[11px] uppercase tracking-wider">
                  {tool.category}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-muted mt-8 text-center text-sm"
        >
          Plus deep proficiency in Microsoft Excel, PowerPoint, Word & Outlook.
        </motion.p>
      </div>
    </section>
  );
}
