import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        space: { DEFAULT: "#050B2E", 900: "#030720", 800: "#0A1450", 700: "#122070", 600: "#1B2F9A" },
        gold: { DEFAULT: "#FFC83D", deep: "#F5A300", light: "#FFE08A" },
        ruby: "#D61F1F",
      },
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
      keyframes: {
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(255,200,61,0.65)" },
          "70%": { boxShadow: "0 0 0 16px rgba(255,200,61,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(255,200,61,0)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        drive: {
          "0%": { transform: "translateX(-140px)" },
          "100%": { transform: "translateX(calc(100vw + 40px))" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        twinkle: { "0%,100%": { opacity: "0.35" }, "50%": { opacity: "1" } },
      },
      animation: {
        pulseRing: "pulseRing 2s infinite",
        floaty: "floaty 6s ease-in-out infinite",
        drive: "drive 14s linear infinite",
        shimmer: "shimmer 4s linear infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
