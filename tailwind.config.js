/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      tl: "#701a75",
      td: "#d946ef",
      bl: "#f5f5f5",
      bd: "#262626",
    },
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
