/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Use 'class' based dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--foreground)", // Text color for both light and dark mode
        },
      },
      backgroundColor: {
        skin: {
          base: "var(--background)", // Background color for both light and dark mode
        },
      },
    },
  },
  plugins: [],
};
