/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rightTickerShadow': 'linear-gradient(270deg, #f2f2f8, #0000)',
        'leftTickerShadow': 'linear-gradient(90deg, #f2f2f8, #0000)',
        'bottomTickerShadow': 'linear-gradient(to top, #1b1f4f, transparent 80%)'
      }
    },
  },
  plugins: [],
}

