//** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/min/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
