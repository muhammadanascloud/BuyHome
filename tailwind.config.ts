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
        // Custom Dark Theme Colors
        background: "#1F2937", // Dark Charcoal
        secondaryBg: "#111827", // Almost Black
        accent: "#3B82F6", // Vibrant Blue
        highlight: "#F59E0B", // Warm Amber
        text: "#E5E7EB", // Light Gray
        heading: "#F9FAFB", // Almost White
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
