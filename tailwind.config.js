/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        redTitle: "#B81F31",
      },

      screens: {
        md: "868px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        parallax1: "url('../public/parallax1.jpg')",
        parallax2: "url('../public/parallax2.jpg')",
      },
    },
    plugins: [],
  },
};
