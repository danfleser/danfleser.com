module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
};
