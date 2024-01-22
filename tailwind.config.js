/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    ".pages/**/*.{html,ts}",
    ".components/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#402B3A",
        secondary: "#1E293B",
        pink: "#D63484",
        rose: "#FF9BD2",
        clear: "#F8F4EC",
        accent: "#CB5930",
        danger: "#f00"
      }
    },
  },
  plugins: [],
}

