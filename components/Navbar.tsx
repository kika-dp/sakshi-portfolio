"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import cv from "@/lib/cv-data";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Why Me", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = cv.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        className={`container-xl mt-3 flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:mx-auto sm:px-5 ${
          scrolled ? "glass shadow-soft" : "border border-transparent"
        }`}
        style={{ marginLeft: "0.75rem", marginRight: "0.75rem", width: "auto" }}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-highlight text-sm font-bold text-white shadow-glow">
            {initials}
          </span>
          <span className="font-display hidden text-sm font-semibold sm:block">
            {cv.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href={cv.resumePath}
            download
            className="btn-primary hidden !px-4 !py-2.5 text-xs sm:inline-flex"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="glass flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass mx-3 mt-2 rounded-2xl p-3 shadow-soft lg:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
