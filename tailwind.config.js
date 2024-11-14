// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Sour Gummy"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'bg-pattern': "url('./assets/image/bg.jpg')",
      },
    },
  },
  plugins: [],
};
