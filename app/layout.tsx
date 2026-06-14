import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import cv from "@/lib/cv-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://saxi-griglani.vercel.app";
const description = cv.summary;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${cv.name} — ${cv.title}`,
    template: `%s — ${cv.name}`,
  },
  description,
  keywords: [
    cv.name,
    "Accountant",
    "Finance Professional",
    "Australian Tax Compliance",
    "BAS IAS Lodgement",
    "Xero",
    "MYOB",
    "QuickBooks",
    "Bookkeeping",
    "Financial Reporting",
    "Payroll STP",
    "Surat Accountant",
  ],
  authors: [{ name: cv.name }],
  creator: cv.name,
  openGraph: {
    type: "profile",
    title: `${cv.name} — ${cv.title}`,
    description,
    url: siteUrl,
    siteName: `${cv.name} · Portfolio`,
    images: [{ url: cv.profileImage, width: 983, height: 1600, alt: cv.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${cv.name} — ${cv.title}`,
    description,
    images: [cv.profileImage],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: cv.name,
  jobTitle: cv.title,
  description: cv.summary,
  email: `mailto:${cv.contact.email}`,
  telephone: cv.contact.phone,
  image: siteUrl + cv.profileImage,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    postalCode: "395009",
    addressCountry: "IN",
  },
  knowsLanguage: cv.languages,
  knowsAbout: cv.competencies,
  alumniOf: cv.education.map((e) => ({
    "@type": "EducationalOrganization",
    name: e.institution,
  })),
  worksFor: {
    "@type": "Organization",
    name: cv.experience[0].company,
  },
};

const themeScript = `
(function() {
  try {
    var t = localStorage.getItem('theme');
    if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
