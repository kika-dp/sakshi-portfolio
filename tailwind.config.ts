import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        slate850: "#1E293B",
        accent: {
          DEFAULT: "#14B8A6",
          soft: "#5EEAD4",
        },
        highlight: {
          DEFAULT: "#38BDF8",
          soft: "#7DD3FC",
        },
        canvas: "#F8FAFC",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-geist)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(15, 23, 42, 0.18)",
        glow: "0 0 0 1px rgba(20,184,166,0.18), 0 20px 60px -20px rgba(20,184,166,0.35)",
        card: "0 1px 2px rgba(15,23,42,0.04), 0 12px 40px -16px rgba(15,23,42,0.20)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
