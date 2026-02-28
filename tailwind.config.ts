import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FAF9F6",
          dark: "#F0EDE6",
        },
        navy: {
          DEFAULT: "#0F0E17",
          light: "#1a1928",
        },
        lumos: {
          purple: "#7C3AED",
          "purple-light": "#A78BFA",
          "purple-glow": "#6D28D9",
          coral: "#F97316",
          "coral-light": "#FB923C",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,58,237,0.35) 0%, transparent 70%), linear-gradient(to bottom, #0F0E17, #1a1928)",
        "purple-glow":
          "radial-gradient(ellipse at center, rgba(124,58,237,0.2) 0%, transparent 70%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(167,139,250,0.04) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
