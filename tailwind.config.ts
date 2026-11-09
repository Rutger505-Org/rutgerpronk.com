import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0E1013",
          alt: "#0B0D10",
        },
        surface: {
          DEFAULT: "#12151A",
          raised: "#15181D",
        },
        key: {
          DEFAULT: "#20252C",
          modifier: "#1B1F25",
          edge: "#2B3038",
          "modifier-edge": "#262B33",
          pressed: "#232A1F",
          shadow: "#0A0C0F",
        },
        border: {
          DEFAULT: "#1E2228",
          card: "#242830",
          control: "#2E333C",
          strong: "#3A4250",
          node: "#4A515C",
        },
        text: {
          DEFAULT: "#E8EAED",
          secondary: "#B4BAC4",
          muted: "#8A919C",
          faint: "#6B7380",
        },
        accent: {
          DEFAULT: "#A6E36E",
          foreground: "#0E1013",
        },
        warm: "#F0B35A",
        danger: "#F87171",
      },
      fontFamily: {
        display: ["var(--font-display)", ...fontFamily.sans],
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      maxWidth: {
        page: "1200px",
      },
      keyframes: {
        blink: {
          "50%": { opacity: "0" },
        },
        fade: {
          from: { opacity: "0", transform: "scale(1.015)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        blink: "blink 1.1s steps(1) infinite",
        fade: "fade 0.35s ease",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
