"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport, scaleIn } from "@/lib/motion";
import cv from "@/lib/cv-data";
import SectionHeader from "./SectionHeader";

/**
 * Real brand logos for the stack wall. Each logo is pre-processed to sit
 * transparently on the dark theme — dark/black wordmarks are lightened to
 * white while brand-coloured marks are preserved, so no plate is needed.
 */
const LOGOS: Record<string, string> = {
  Xero: "/logos/xero.png",
  MYOB: "/logos/myob.png",
  QuickBooks: "/logos/quickbooks.png",
  "Zoho Books": "/logos/zoho.png",
  NetSuite: "/logos/netsuite.png",
  "Tally ERP 9": "/logos/tally.png",
  Dext: "/logos/dext.png",
  Hubdoc: "/logos/hubdoc.png",
  Fathom: "/logos/fathom.png",
  Joiin: "/logos/joiin.png",
  Excel: "/logos/excel.png",
  "MS Office": "/logos/msoffice.png",
};

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
          {cv.tools.map((tool) => {
            const logo = LOGOS[tool.name];
            return (
              <motion.div
                key={tool.name}
                variants={scaleIn}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass group relative flex flex-col items-center overflow-hidden rounded-2xl p-5 shadow-card"
              >
                <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-accent/0 to-highlight/0 opacity-0 transition-opacity duration-300 group-hover:from-accent/10 group-hover:to-highlight/10 group-hover:opacity-100" />

                {/* Transparent logo — no plate */}
                <div className="flex h-14 w-full items-center justify-center transition-transform duration-300 group-hover:scale-105 sm:h-16">
                  {logo ? (
                    <div className="relative h-full w-full">
                      <Image
                        src={logo}
                        alt={`${tool.name} logo`}
                        fill
                        sizes="(max-width: 640px) 40vw, (max-width: 1024px) 28vw, 200px"
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <span className="font-display text-lg font-bold gradient-text">
                      {tool.name}
                    </span>
                  )}
                </div>

                <div className="mt-4 text-center">
                  <div className="text-sm font-semibold leading-tight">
                    {tool.name}
                  </div>
                  <div className="text-muted text-[11px] uppercase tracking-wider">
                    {tool.category}
                  </div>
                </div>
              </motion.div>
            );
          })}
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
