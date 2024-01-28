import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      primary: "#121125",
      secondary: "#0E0E21",
      accent: "#FF365A",
      textPrimary: "#EDEDED",
      textSecondary: "#CAC8DC",

      transparent: "transparent",
      red: "#FF0000",
      green: "#00FF00",
      blue: "#0000FF",
    },
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      mdlg: '850px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      'too-big': '2800px',

      aboutMe: '520px',
    },
    extend: {
      padding: {
        spacing: "10%"
      },
      margin: {
        spacing: "10%"
      }
    }
  },
  plugins: []
};
export default config;
