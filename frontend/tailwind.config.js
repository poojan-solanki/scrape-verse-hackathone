/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712",
        foreground: "#f8fafc",
        card: {
          DEFAULT: "rgba(15, 23, 42, 0.75)",
          foreground: "#f8fafc",
        },
        popover: {
          DEFAULT: "#0f172a",
          foreground: "#f8fafc",
        },
        primary: {
          DEFAULT: "#06b6d4",
          foreground: "#020617",
        },
        secondary: {
          DEFAULT: "#1e293b",
          foreground: "#f8fafc",
        },
        muted: {
          DEFAULT: "#1e293b",
          foreground: "#94a3b8",
        },
        accent: {
          DEFAULT: "#38bdf8",
          foreground: "#020617",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#f8fafc",
        },
        border: "rgba(51, 65, 85, 0.7)",
        input: "rgba(30, 41, 59, 0.8)",
        ring: "#06b6d4",
        maritime: {
          deep: "#020617",
          obsidian: "#030712",
          navy: "#0a1128",
          slate: "#0f172a",
          surface: "rgba(15, 23, 42, 0.85)",
          border: "rgba(56, 189, 248, 0.2)",
          cyan: "#22d3ee",
          emerald: "#10b981",
          amber: "#f59e0b",
          purple: "#a855f7",
          blue: "#3b82f6",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      boxShadow: {
        "glow-cyan": "0 0 25px -5px rgba(6, 182, 212, 0.35)",
        "glow-emerald": "0 0 25px -5px rgba(16, 185, 129, 0.35)",
        "glow-purple": "0 0 25px -5px rgba(168, 85, 247, 0.35)",
        "inner-glow": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 12s linear infinite",
        "beacon-ping": "ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
