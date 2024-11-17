/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-secondary': '#000000',
        'text-primary': '#FFFFFF',
        'card-bg': '#1C1C1C',
      },
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
        'arizona': ['Arizona', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'monu-bold': ['Monument-bold', 'sans-serif'],
        'monu': ['Monument', 'sans-serif'],
        'irish': ['Irish'],
        'antic': ['Antic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

