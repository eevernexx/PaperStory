import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: "#FFB89E",
        mint: "#B8F2C9",
        lavender: "#C9B6FF",
        sky: "#A8D8FF",
        coral: "#FF6B6B",
        yellow: "#FFE066",
        pink: "#FFB8D9",
        ink: "#0A0A0A",
        paper: "#FFF8E7",
        "paper-2": "#FAEFD4",
      },
      boxShadow: {
        neo: "6px 6px 0 #0A0A0A",
        "neo-lg": "10px 10px 0 #0A0A0A",
        "neo-xl": "14px 14px 0 #0A0A0A",
        "neo-sm": "4px 4px 0 #0A0A0A",
        "neo-xs": "3px 3px 0 #0A0A0A",
      },
      borderWidth: {
        3: "3px",
      },
      fontFamily: {
        display: ['"Archivo Black"', "Helvetica Neue", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      borderRadius: {
        "neo-xl": "28px",
        "neo-lg": "20px",
        "neo-md": "14px",
      },
      animation: {
        pulse: "pulse 1.8s infinite",
        float: "float 8s ease-in-out infinite",
        tick: "tick 1.6s linear infinite",
        spin: "spin 4s linear infinite",
        marquee: "marquee 28s linear infinite",
        rot: "rot 1s linear infinite",
      },
      keyframes: {
        pulse: {
          "0%": { boxShadow: "0 0 0 0 rgba(255,107,107,0.6)" },
          "70%": { boxShadow: "0 0 0 10px rgba(255,107,107,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(255,107,107,0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(var(--rot, 0deg))" },
          "50%": { transform: "translateY(-18px) rotate(var(--rot, 0deg))" },
        },
        tick: {
          to: { transform: "translate(-50%, -100%) rotate(360deg)" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        rot: {
          to: { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
