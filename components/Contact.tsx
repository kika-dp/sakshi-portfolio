"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Download,
  Linkedin,
} from "lucide-react";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import cv from "@/lib/cv-data";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio enquiry from ${form.name}${form.company ? ` (${form.company})` : ""}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}${form.company ? `\n${form.company}` : ""}`
    );
    window.location.href = `mailto:${cv.contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const channels = [
    {
      icon: Mail,
      label: "Email",
      value: cv.contact.email,
      href: `mailto:${cv.contact.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: cv.contact.phone,
      href: cv.contact.phoneHref,
    },
    {
      icon: MapPin,
      label: "Location",
      value: cv.contact.location,
      href: undefined,
    },
  ];

  const input =
    "w-full rounded-2xl border bg-[var(--bg)] px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20 placeholder:text-muted";

  return (
    <section id="contact" className="section-pad relative">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(43,163,156,0.08), transparent)",
        }}
      />
      <div className="container-xl">
        <SectionHeader
          eyebrow="Contact"
          title={
            <>
              Let&apos;s <span className="gradient-text">connect</span>
            </>
          }
          subtitle="Looking for a reliable finance professional? I'd love to hear from you."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Channels */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex flex-col gap-4"
          >
            {channels.map((c) => {
              const Inner = (
                <div className="glass flex items-center gap-4 rounded-2xl p-5 shadow-card transition-transform hover:-translate-y-1">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-highlight text-white shadow-glow">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-muted text-xs uppercase tracking-wider">
                      {c.label}
                    </div>
                    <div className="truncate text-sm font-semibold">
                      {c.value}
                    </div>
                  </div>
                </div>
              );
              return (
                <motion.div key={c.label} variants={fadeUp}>
                  {c.href ? (
                    <a href={c.href} className="block">
                      {Inner}
                    </a>
                  ) : (
                    Inner
                  )}
                </motion.div>
              );
            })}

            <motion.a
              variants={fadeUp}
              href={cv.resumePath}
              download
              className="btn-primary mt-1 w-full"
            >
              <Download className="h-4 w-4" />
              Download Full Resume
            </motion.a>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-6 shadow-card sm:p-8"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="h-14 w-14 text-accent" />
                <h3 className="font-display mt-4 text-xl font-bold">
                  Thank you!
                </h3>
                <p className="text-muted mt-2 text-sm">
                  Your email client is opening — I&apos;ll reply as soon as I
                  can.
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold">
                      Name
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Jane Doe"
                      className={input}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="jane@company.com"
                      className={input}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="mb-1.5 block text-xs font-semibold">
                    Company
                  </label>
                  <input
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                    placeholder="Company name (optional)"
                    className={input}
                  />
                </div>
                <div className="mt-4">
                  <label className="mb-1.5 block text-xs font-semibold">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell me about the role or project…"
                    className={`${input} resize-none`}
                  />
                </div>
                <button type="submit" className="btn-primary mt-5 w-full">
                  <Send className="h-4 w-4" />
                  Let&apos;s Connect
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
