/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      backgroundImage: {
        parallax1: "url('../public/parallax1.jpg')",
        parallax2: "url('../public/parallax2.jpg')",
      },
    },
  },
  plugins: [],
};
