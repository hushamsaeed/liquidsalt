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
        ocean: {
          DEFAULT: "#003B5C",
          navy: "#003B5C",
        },
        cyan: {
          DEFAULT: "#00B4D8",
          bio: "#00B4D8",
        },
        coral: {
          DEFAULT: "#C9860A",
          gold: "#C9860A",
        },
        manta: {
          DEFAULT: "#1A1A2E",
          black: "#1A1A2E",
        },
        reef: {
          DEFAULT: "#0077A8",
          teal: "#0077A8",
        },
        night: {
          DEFAULT: "#0A0F1E",
          dive: "#0A0F1E",
        },
        salt: {
          DEFAULT: "#F0F8FF",
          white: "#F0F8FF",
        },
        sand: {
          DEFAULT: "#F5F0E8",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        "hero-desktop": ["96px", { lineHeight: "1.05", fontWeight: "700" }],
        "hero-mobile": ["48px", { lineHeight: "1.1", fontWeight: "700" }],
        "hero-sub": ["18px", { lineHeight: "1.4", fontWeight: "500", letterSpacing: "0.1em" }],
        "card-title": ["28px", { lineHeight: "1.2", fontWeight: "600" }],
        "card-price": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "card-price-sub": ["14px", { lineHeight: "1.4", fontWeight: "400" }],
        "badge": ["12px", { lineHeight: "1.4", fontWeight: "700" }],
        "inclusion": ["15px", { lineHeight: "1.6", fontWeight: "400" }],
        "team-name": ["20px", { lineHeight: "1.3", fontWeight: "700" }],
        "team-role": ["14px", { lineHeight: "1.4", fontWeight: "500", letterSpacing: "0.08em" }],
        "pull-quote": ["32px", { lineHeight: "1.4", fontWeight: "400" }],
      },
      spacing: {
        "space-1": "8px",
        "space-2": "16px",
        "space-3": "24px",
        "space-4": "32px",
        "space-6": "48px",
        "space-8": "64px",
        "space-12": "96px",
        "space-16": "128px",
        "space-24": "192px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "24px",
        full: "9999px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(0, 59, 92, 0.12)",
        hover: "0 8px 40px rgba(0, 59, 92, 0.20)",
        deep: "0 16px 64px rgba(0, 0, 0, 0.40)",
        glow: "0 0 40px rgba(0, 180, 216, 0.30)",
      },
      transitionDuration: {
        "200": "200ms",
        "300": "300ms",
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
      keyframes: {
        "scroll-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
      animation: {
        "scroll-bounce": "scroll-bounce 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
