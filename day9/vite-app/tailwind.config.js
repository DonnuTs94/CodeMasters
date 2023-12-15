/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
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
  // eslint-disable-next-line no-undef
  plugins: [require("preline/plugin")],
}
