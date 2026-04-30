/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        surface: "#111113",
        border: "#1f1f23",
        muted: "#9ca3af",
        accent: {
          DEFAULT: "#6c63ff",
          hover: "#5a52e0",
          soft: "rgba(108, 99, 255, 0.12)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        "orb-float": "orbFloat 14s ease-in-out infinite",
        "orb-float-slow": "orbFloat 22s ease-in-out infinite",
      },
      keyframes: {
        orbFloat: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 30px) scale(0.95)" },
        },
      },
    },
  },
  plugins: [],
};
