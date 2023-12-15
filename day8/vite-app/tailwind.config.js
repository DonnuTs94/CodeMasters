import plugin from "tailwindcss/plugin"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./src/index.html",
    "src/*.html",
    " node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#467F8C",
        secondary: "#D98841",
        danger: "#EA3125",
        success: "#26EB77",
      },
      fontFamily: {
        abhaya: ["Abhaya Libre", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("preline/plugin"),

    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "1px 1px 2px rgba(0,0,0,0.75)",
        },
        ".text-shadow-md": {
          textShadow: "3px 3px 4px rgba(0,0,0,0.75)",
        },
        ".text-shadow-lg": {
          textShadow: "5px 5px 6px rgba(0,0,0,0.75)",
        },
        ".text-shadow-lx": {
          textShadow: "7px 7px 10px rgba(0,0,0,0.75)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
        ".yooooo": {
          backgroundColor: "red",
          color: "white",
          padding: ".5rem 1rem",
          borderRadius: "0.5rem",
        },
      }
      addUtilities(newUtilities, ["responsive", "hover"])
    }),
  ],
}
