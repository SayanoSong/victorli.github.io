import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#F2F2F2",
        blueberry: "#3e3f4c",
        purple: "#9980F2",
        rice: "dcd2c6",
      },
      keyframes: {
        "fade-in-bounce-right": {
          "0%": {
            opacity: "0",
            transform: "translate3d(100%, 0%, 0)",
          },
          "33%": {
            opacity: "0.5",
            transform: "translate3d(0%, 0%, 0)",
          },
          "66%": {
            opacity: "0.7",
            transform: "translate3d(20%, 0%, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
    },
    container: {
      center: true,
    },
    colors: {
      white: "#F2F2F2",
      blueberry: "#3e3f4c",
      purple: "#9980F2",
      rice: "#dcd2c6",
      blue: {
        100: "#264CBF",
        200: "#353459",
        300: "#211259",
        400: "#0F0F26",
      },
      yellow: "#F2D22E",
      sky: "#88DFF2",
      silver: "#D8E0F2",
      gray: "#8596A6",
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            foreground: "#dcd2c6",
            background: "#3e3f4c",
          },
        },
        dark: {
          colors: {
            foreground: "#3e3f4c",
            background: "#dcd2c6",
          },
        },
      },
    }),
  ],
} satisfies Config;
