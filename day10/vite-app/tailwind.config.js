/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "src/**/*.{js,jsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#467F8C",
        secondary: "#D98841",
        danger: "#EA3125",
        success: "#26EB77",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
}
