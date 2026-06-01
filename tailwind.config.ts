import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: {
          DEFAULT: "var(--surface)",
          elevated: "var(--surface-elevated)",
        },
        muted: "var(--muted)",
        border: "var(--border)",
        forest: {
          DEFAULT: "var(--forest)",
          light: "var(--forest-light)",
        },
        moss: "var(--moss)",
        wood: "var(--wood)",
        beige: "var(--beige)",
        accent: "var(--accent)",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
