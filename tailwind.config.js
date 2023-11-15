/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'cblue': {
          dark: '#000227',
          ohio: '#06b6d4',
          light: '#00FFF0',
        },
      },
      fontFamily: {
        montez: ['Montez'],
        mohave: ['Mohave'],
        ellen: ['Sue Ellen Francisco'],
      },
    },
  },
  plugins: [],
}

