/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        coching: {
          nav_color: "#365B6D",
          background: "#EAEDED",
          light_blue: "#232f3A",
          text_color: "#40C2BA",
          button_color: "rgb(25, 113, 194)"
        },
      },
    },
  },
  plugins: [],
};
