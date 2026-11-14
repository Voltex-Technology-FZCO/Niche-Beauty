import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2.5rem", xl: "3.5rem" },
      screens: { "2xl": "1360px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "#cdb497", foreground: "#0b0908" },
        secondary: { DEFAULT: "#15110e", foreground: "#f4ece3" },
        muted: { DEFAULT: "#231c17", foreground: "#a89a8a" },
        accent: { DEFAULT: "#cdb497", foreground: "#0b0908" },
        ink: "#0b0908",
        espresso: "#15110e",
        mocha: "#231c17",
        taupe: "#8c7d6d",
        champagne: { DEFAULT: "#cdb497", light: "#e6d6c0", dark: "#a88d6c" },
        cream: { DEFAULT: "#f4ece3", dark: "#e9ddd0" },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
      },
      letterSpacing: {
        label: "0.22em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.6s ease-out both",
        "slow-zoom": "slow-zoom 2.4s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
