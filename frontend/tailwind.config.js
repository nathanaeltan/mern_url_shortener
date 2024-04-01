/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        homage: {
          '32bdc7': '#32bdc7',
          '5ec8d0': '#5ec8d0'
        }
      }
    },
  },
  plugins: [],
}

