import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ["Roboto", "sans"],
        'sigmar': ["Sigmar", "sans-serif"],
        'azeret-mono': ["Azeret Mono", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--orange)",
      },
    },
  },
  plugins: [],
} satisfies Config;
