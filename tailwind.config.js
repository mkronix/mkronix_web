/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#0A0A0A',
        'white': '#F5F5F5',
        'primary': '#C2FF3F',
        'gray-dark': '#151518',
        'gray': '#2E2E2E',
        'gray-light': '#A8A8A8',
      },
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
        'arizona': ['Arizona', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'monu-bold': ['Monument-bold', 'sans-serif'],
        'monu': ['Monument', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

