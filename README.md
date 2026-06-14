# Saxi Griglani — Personal Brand Portfolio

A premium, recruiter-focused personal portfolio for **Saxi Griglani**, Accounting & Finance Professional. Built to establish credibility within five seconds: modern luxury / FinTech-inspired design, fully dynamic content, dark mode, and rich SEO.

## ✨ Highlights

- **Dynamic from CV** — every section is generated from a single typed data model in [`lib/cv-data.ts`](lib/cv-data.ts). Swap that file and the whole site re-skins.
- **Sections** — Hero (animated counters) · About · Experience timeline · Skills (proficiency bars) · Tools wall · Education · Achievements · Why Hire Me · Contact (form) · Footer.
- **Resume** — download button (navbar, hero, contact, footer) + open-in-new-tab + sticky mobile CTA.
- **Profile photo** — circular crop, gradient ring, soft shadow, hover zoom, optimized via `next/image`.
- **Animations** — Framer Motion: fade/slide/stagger, scroll reveal, floating elements, animated counters, micro-interactions. Respects `prefers-reduced-motion`.
- **Dark mode** — class-based, no flash (inline theme script), system-preference aware.
- **SEO** — dynamic metadata, Open Graph, Twitter cards, JSON-LD `Person` schema, sitemap & robots.
- **Accessible & responsive** — mobile-first, semantic HTML, keyboard-friendly, ARIA labels.

## 🛠 Tech Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons · `next/font` (Inter + Geist)

## 🎨 Design Tokens

| Role       | Color     |
| ---------- | --------- |
| Primary    | `#0F172A` |
| Secondary  | `#1E293B` |
| Accent     | `#14B8A6` |
| Highlight  | `#38BDF8` |
| Background  | `#F8FAFC` |
| Text       | `#111827` |

## 🚀 Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## 📁 Structure

```
app/            # layout (SEO + JSON-LD), page, globals, sitemap, robots
components/     # one component per section + shared primitives
lib/            # cv-data.ts (content) + motion.ts (animation variants)
public/         # profile.png + Saxi_Griglani_CV.pdf
```

## ✏️ Editing content

All text, experience, skills, tools, education and contact details live in [`lib/cv-data.ts`](lib/cv-data.ts). Replace `public/profile.png` and `public/Saxi_Griglani_CV.pdf` to update the photo and downloadable resume.
