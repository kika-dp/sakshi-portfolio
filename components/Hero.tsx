"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail, MapPin, Sparkles } from "lucide-react";
import { fadeUp, stagger } from "@/lib/motion";
import cv, { stats } from "@/lib/cv-data";
import Counter from "./Counter";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 md:pt-40 lg:px-12"
    >
      {/* Aurora blobs */}
      <div className="aurora left-[-10%] top-[-5%] h-[420px] w-[420px] animate-float bg-accent/40" />
      <div
        className="aurora right-[-10%] top-[10%] h-[480px] w-[480px] animate-float bg-highlight/40"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.4] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(15,23,42,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
        }}
      />

      <div className="container-xl grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: copy */}
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div variants={fadeUp}>
            <span className="eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {cv.available ? "Open to opportunities" : cv.profession}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.2rem]"
          >
            {cv.name.split(" ")[0]}{" "}
            <span className="gradient-text">{cv.name.split(" ")[1]}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg font-semibold text-accent sm:text-xl"
          >
            {cv.title}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-muted mt-5 max-w-xl text-base leading-relaxed sm:text-lg"
          >
            {cv.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="text-muted mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-accent" /> Surat, India
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-accent" /> 4+ years in finance
            </span>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a href={cv.resumePath} download className="btn-primary">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl p-4 text-center shadow-card"
              >
                <div className="font-display text-2xl font-bold gradient-text sm:text-3xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-muted mt-1 text-[11px] font-medium leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-0 -z-10 animate-float rounded-full bg-gradient-to-tr from-accent/30 to-highlight/30 blur-2xl" />

          <div className="group relative mx-auto aspect-square w-full max-w-[360px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent to-highlight p-[3px] shadow-glow transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-canvas">
                <Image
                  src={cv.profileImage}
                  alt={`${cv.name} — ${cv.title}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 320px, 360px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -left-2 top-10 rounded-2xl px-4 py-3 shadow-soft sm:-left-6"
            >
              <div className="text-xs font-semibold">BAS / IAS</div>
              <div className="text-muted text-[10px]">ATO Compliant</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="glass absolute -right-2 bottom-12 rounded-2xl px-4 py-3 shadow-soft sm:-right-6"
            >
              <div className="text-xs font-semibold gradient-text">Xero · MYOB</div>
              <div className="text-muted text-[10px]">Cloud ERP Expert</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
