/**
 * Single source of truth for the portfolio.
 * All page content is derived from this structured CV model — nothing is hardcoded
 * inside components. Swap this file and the entire site re-skins to a new candidate.
 */

export interface ExperienceItem {
  company: string;
  position: string;
  start: string;
  end: string;
  current?: boolean;
  location?: string;
  summary: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  icon: string; // lucide icon name
  skills: { name: string; level: number }[];
}

export interface EducationItem {
  qualification: string;
  institution: string;
  period: string;
  result: string;
}

export interface ToolItem {
  name: string;
  category: string;
}

const cv = {
  // ─── Identity ──────────────────────────────────────────────
  name: "Saxi Griglani",
  firstName: "Saxi",
  title: "Accounting & Finance Professional",
  tagline:
    "Australian tax compliance, financial reporting & automation specialist turning numbers into strategic clarity.",
  summary:
    "Results-driven accounting and finance professional with 4+ years of progressive experience across bookkeeping, financial reporting, payroll, and Australian tax compliance (BAS/IAS/STP). Proficient in cloud-based ERP platforms and automation tools, with a strong track record of streamlining workflows, ensuring regulatory compliance, and delivering accurate financial insights that support strategic decision-making.",
  profession: "Accounting & Finance",
  available: true,

  // ─── Contact ───────────────────────────────────────────────
  contact: {
    phone: "+91-6351874166",
    phoneHref: "tel:+916351874166",
    email: "shaxigriglani150@gmail.com",
    location: "Surat, Gujarat – 395009, India",
    linkedin: "", // not provided on CV
  },

  resumePath: "/Saxi_Griglani_CV.pdf",
  profileImage: "/profile.png",

  // ─── About ─────────────────────────────────────────────────
  about: {
    narrative: [
      "An accounting and finance professional with 4+ years specialising in Australian tax compliance — BAS, IAS and Single Touch Payroll — keeping organisations audit-ready and squarely on the right side of the ATO.",
      "My edge is compliance discipline paired with automation: fluent across cloud ERPs like Xero, MYOB and QuickBooks, I compress month-ends and turn the ledger into reporting leaders can act on.",
    ],
    facts: [
      "4+ years experience",
      "Australian tax compliance",
      "Cloud ERP & automation",
    ],
    philosophy:
      "Accuracy first, automation always, and insight that leadership can act on.",
  },

  // ─── Experience ────────────────────────────────────────────
  experience: [
    {
      company: "Auzin Advisory Pvt Ltd",
      position: "Accountant",
      start: "Jan 2024",
      end: "Present",
      current: true,
      summary:
        "Own end-to-end Australian accounting and tax compliance for a portfolio of clients, pairing ATO-grade accuracy with automation-led reporting.",
      highlights: [
        "Prepared and lodged Business Activity Statements (BAS) and Instalment Activity Statements (IAS) in full compliance with ATO requirements.",
        "Managed end-to-end Accounts Receivable and Accounts Payable — invoicing, debtor management, vendor reconciliations, and credit control.",
        "Administered payroll with Single Touch Payroll (STP) lodgements and accurate Superannuation Guarantee Contributions (SGC).",
        "Delivered monthly MIS reports, management accounts (P&L, Balance Sheet, KPI dashboards), and variance analysis to senior management.",
        "Performed cash flow forecasting, budget monitoring, and liquidity reporting to support business planning.",
        "Introduced automation tools that streamlined reporting workflows and significantly reduced reporting timelines.",
        "Supported external audits with reconciliations, compliance schedules, and documentation.",
      ],
    },
    {
      company: "DB Engineers",
      position: "Accountant & HR Executive",
      start: "Apr 2021",
      end: "Dec 2023",
      summary:
        "Ran day-to-day accounting and statutory compliance while owning core HR operations for the business.",
      highlights: [
        "Maintained day-to-day accounting — Cash Book, Bank Reconciliation, Purchase, Sales, Payments, and Receipts registers.",
        "Prepared monthly Profit & Loss accounts and Balance Sheets for management review.",
        "Processed vendor invoices, generated purchase orders and tax invoices, and posted transactions to accounting software.",
        "Managed TDS computations and compliance documentation.",
        "Processed payroll, examined employee expense claims, and assisted with PF/ESIC statutory documentation.",
        "Oversaw HR responsibilities including salary sheets, employee benefits, training coordination, and workplace compliance.",
      ],
    },
  ] as ExperienceItem[],

  // ─── Skills (categorised + proficiency) ────────────────────
  skillCategories: [
    {
      title: "Tax & Compliance",
      icon: "ShieldCheck",
      skills: [
        { name: "BAS / IAS Lodgement", level: 95 },
        { name: "STP & Superannuation (SGC)", level: 92 },
        { name: "GST & PAYG Withholding", level: 90 },
        { name: "TDS & PF / ESIC", level: 85 },
      ],
    },
    {
      title: "Financial Reporting",
      icon: "LineChart",
      skills: [
        { name: "Management Accounts (P&L, BS)", level: 93 },
        { name: "MIS & KPI Dashboards", level: 90 },
        { name: "Variance Analysis", level: 88 },
        { name: "Cash Flow Forecasting", level: 87 },
      ],
    },
    {
      title: "Core Accounting",
      icon: "Calculator",
      skills: [
        { name: "Accounts Receivable & Payable", level: 94 },
        { name: "General Ledger & Journals", level: 92 },
        { name: "Bank Reconciliation", level: 93 },
        { name: "Payroll Administration", level: 90 },
      ],
    },
    {
      title: "Professional & Leadership",
      icon: "Users",
      skills: [
        { name: "Analytical Thinking", level: 92 },
        { name: "Attention to Detail", level: 95 },
        { name: "Team Collaboration", level: 88 },
        { name: "HR & Statutory Operations", level: 84 },
      ],
    },
  ] as SkillCategory[],

  // ─── Tools / Tech wall ─────────────────────────────────────
  tools: [
    { name: "Xero", category: "ERP" },
    { name: "MYOB", category: "ERP" },
    { name: "QuickBooks", category: "ERP" },
    { name: "Zoho Books", category: "ERP" },
    { name: "NetSuite", category: "ERP" },
    { name: "Tally ERP 9", category: "ERP" },
    { name: "Dext", category: "Automation" },
    { name: "Hubdoc", category: "Automation" },
    { name: "Fathom", category: "Reporting" },
    { name: "Joiin", category: "Reporting" },
    { name: "Excel", category: "Productivity" },
    { name: "MS Office", category: "Productivity" },
  ] as ToolItem[],

  // ─── Education ─────────────────────────────────────────────
  education: [
    {
      qualification: "MBA — Finance & Accounting",
      institution: "SGVU, Jaipur",
      period: "2020 – 2022",
      result: "8.05 CGPA",
    },
    {
      qualification: "B.Com — Bachelor of Commerce",
      institution: "K.P. Evening Commerce College",
      period: "2017 – 2020",
      result: "6.0 CGPA",
    },
    {
      qualification: "Higher Secondary (12th) — G.S.H.E.B.",
      institution: "Saraswati Vidhyalaya",
      period: "2015 – 2017",
      result: "83%",
    },
    {
      qualification: "Secondary (10th) — G.S.H.E.B.",
      institution: "Saraswati Kanya Vidhyalaya",
      period: "2014 – 2015",
      result: "72%",
    },
  ] as EducationItem[],

  // ─── Achievements / highlights ─────────────────────────────
  achievements: [
    {
      title: "ATO-Compliant Lodgements",
      detail:
        "Prepared and lodged BAS & IAS in full compliance with ATO requirements across an active client portfolio.",
      icon: "BadgeCheck",
    },
    {
      title: "Faster Month-End Reporting",
      detail:
        "Introduced automation tools that streamlined reporting workflows and significantly reduced reporting timelines.",
      icon: "Zap",
    },
    {
      title: "Audit-Ready Documentation",
      detail:
        "Supported external audits with clean reconciliations, compliance schedules, and complete documentation.",
      icon: "FileCheck",
    },
    {
      title: "MBA in Finance — 8.05 CGPA",
      detail:
        "Graduated with distinction-level performance, building the analytical foundation behind the day-to-day numbers.",
      icon: "GraduationCap",
    },
    {
      title: "End-to-End Payroll & STP",
      detail:
        "Administered full payroll cycles with Single Touch Payroll lodgements and accurate superannuation contributions.",
      icon: "Wallet",
    },
    {
      title: "Dual Accounting + HR Mandate",
      detail:
        "Ran statutory accounting and HR operations in parallel, demonstrating breadth and operational ownership.",
      icon: "Layers",
    },
  ],

  // ─── Why hire me ───────────────────────────────────────────
  whyHireMe: [
    {
      title: "Compliance You Can Trust",
      detail:
        "BAS, IAS, STP, GST, PAYG — lodgements done right the first time, in full alignment with ATO standards.",
      icon: "ShieldCheck",
    },
    {
      title: "Automation Mindset",
      detail:
        "I deploy tools like Dext, Hubdoc and Fathom to cut reporting time and eliminate manual error at the source.",
      icon: "Bot",
    },
    {
      title: "Insight, Not Just Numbers",
      detail:
        "MIS, KPI dashboards and variance analysis that translate the ledger into decisions leadership can make today.",
      icon: "LineChart",
    },
    {
      title: "Multi-Platform Fluency",
      detail:
        "Comfortable across Xero, MYOB, QuickBooks, Zoho Books, NetSuite and Tally — onboarding is fast, friction is low.",
      icon: "Layers",
    },
    {
      title: "Ownership End-to-End",
      detail:
        "From AR/AP and reconciliations to month-end close and audit support — I carry the whole cycle, not just a slice.",
      icon: "CheckCircle2",
    },
    {
      title: "Detail Without Drama",
      detail:
        "Meticulous, calm under deadline, and clear in communication — the kind of finance partner teams rely on quietly.",
      icon: "Sparkles",
    },
  ],

  // ─── Languages ─────────────────────────────────────────────
  languages: ["English", "Hindi", "Gujarati", "Sindhi"],

  // ─── Core competencies (chips) ─────────────────────────────
  competencies: [
    "Financial Reporting & Analysis",
    "Accounts Receivable & Payable",
    "Payroll Administration & STP",
    "BAS / IAS Preparation & Lodgement",
    "Budget Forecasting & Variance Analysis",
    "General Ledger & Journal Entries",
    "Cash Flow Management",
    "Tax Compliance (GST, PAYG, TDS)",
    "Internal Controls & Audit Support",
    "HR Operations & Statutory Compliance",
  ],
};

// ─── Derived statistics (for animated counters) ─────────────
export const stats = [
  { label: "Years of Experience", value: 4, suffix: "+" },
  { label: "ERP & Cloud Platforms", value: cv.tools.filter((t) => ["ERP"].includes(t.category)).length, suffix: "" },
  { label: "Core Competencies", value: cv.competencies.length, suffix: "+" },
  { label: "Compliance Domains", value: 6, suffix: "" },
];

export default cv;
