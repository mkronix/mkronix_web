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
        'parrot': "#D5FF3F",
      },
      fontSize: {
        'dynamic-h2': 'clamp(2rem, 6vw, 4.375rem)',
        'dynamic-p': 'clamp(1.5rem, 3.5vw, 4.5rem)',
      },
      lineHeight: {
        'dynamic-p': 'clamp(1.5rem, 7vw, 6rem)',
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

