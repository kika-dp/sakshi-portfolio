"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ExternalLink, Mail } from "lucide-react";
import cv from "@/lib/cv-data";

export default function MobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className="fixed inset-x-3 bottom-3 z-50 lg:hidden"
        >
          <div className="glass flex items-center gap-2 rounded-2xl p-2 shadow-soft">
            <a
              href={cv.resumePath}
              download
              className="btn-primary flex-1 !py-3 text-xs"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <a
              href={cv.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open CV in new tab"
              className="flex h-11 w-11 items-center justify-center rounded-xl border"
            >
              <ExternalLink className="h-4 w-4 text-accent" />
            </a>
            <a
              href="#contact"
              aria-label="Contact"
              className="flex h-11 w-11 items-center justify-center rounded-xl border"
            >
              <Mail className="h-4 w-4 text-accent" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
