import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1929",
        gold: "#B8973A",
        "gold-dark": "#9a7a2e",
        cream: "#F5F0E8",
        background: "#F4F5F8",
        secondary: "#D4DAE8",
        "primary-text": "#0B1929",
        "secondary-text": "#7A7670",
        "accent-gold": "#6B6762",
        "hover-gold": "#857F7B",
        border: "#C8CDD8",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        "border-top": "borderTop 3s linear infinite",
        "border-right": "borderRight 3s linear infinite",
        "border-bottom": "borderBottom 3s linear infinite",
        "border-left": "borderLeft 3s linear infinite",
        "line-shimmer": "lineShimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "border-beam": {
          "100%": { "offset-distance": "100%" },
        },
        borderTop: {
          "0%, 1%": { width: "0%" },
          "25%": { width: "100%" },
          "99%": { width: "100%" },
          "100%": { width: "0%" },
        },
        borderRight: {
          "0%, 25%": { height: "0%" },
          "50%": { height: "100%" },
          "99%": { height: "100%" },
          "100%": { height: "0%" },
        },
        borderBottom: {
          "0%, 50%": { width: "0%" },
          "75%": { width: "100%" },
          "99%": { width: "100%" },
          "100%": { width: "0%" },
        },
        borderLeft: {
          "0%, 75%": { height: "0%" },
          "99%": { height: "100%" },
          "100%": { height: "0%" },
        },
        lineShimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
