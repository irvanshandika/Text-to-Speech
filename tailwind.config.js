/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "Quicksand" : ['quicksand', 'sans-serif']
      }
    },
  },
  plugins: [],
}

