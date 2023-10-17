/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color-main': '#131313',
        'color-secondary': '#EAA400',
        'color-text': '#666',
        'link-hover' : '#e1a237',
      }
    },
  },
  plugins: [],
}