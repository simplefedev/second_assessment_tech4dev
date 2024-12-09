/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/*.js"],
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(25%)' },
        }
      },
      animation: {
        slideRight: 'slideRight 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}