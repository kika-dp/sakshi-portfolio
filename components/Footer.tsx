"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail, Phone, Download } from "lucide-react";
import cv from "@/lib/cv-data";

export default function Footer() {
  const year = 2026;
  const initials = cv.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden border-t px-5 py-12 sm:px-8 lg:px-12">
      <div className="aurora bottom-[-60%] left-1/2 h-[300px] w-[600px] -translate-x-1/2 bg-accent/20" />
      <div className="container-xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm text-center md:text-left">
            <div className="flex items-center justify-center gap-2.5 md:justify-start">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-highlight text-sm font-bold text-white shadow-glow">
                {initials}
              </span>
              <span className="font-display text-base font-semibold">
                {cv.name}
              </span>
            </div>
            <p className="text-muted mt-4 text-sm leading-relaxed">
              {cv.title} — {cv.profession}. Available for new opportunities and
              collaborations.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <a
              href={`mailto:${cv.contact.email}`}
              className="glass flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail className="h-[18px] w-[18px] text-accent" />
            </a>
            <a
              href={cv.contact.phoneHref}
              className="glass flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:-translate-y-1"
              aria-label="Phone"
            >
              <Phone className="h-[18px] w-[18px] text-accent" />
            </a>
            <a href={cv.resumePath} download className="btn-ghost !py-2.5">
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-muted text-xs">
            © {year} {cv.name}. All rights reserved.
          </p>
          <p className="text-muted text-xs">
            Crafted with precision · Next.js & Framer Motion
          </p>
          <button
            onClick={scrollTop}
            className="group inline-flex items-center gap-2 text-xs font-semibold text-accent"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full border transition-transform group-hover:-translate-y-1">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
