/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-red": "rgb(255 60 60 / 20%)",
        "light-gray": "rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [],
}
