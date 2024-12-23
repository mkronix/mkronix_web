/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'dynamic-h2': 'clamp(2rem, 6vw, 4.375rem)',
        'dynamic-p': 'clamp(1.5rem, 3.5vw, 4.5rem)',
      },
      lineHeight: {
        'dynamic-p': 'clamp(2rem, 4.5vw, 6rem)',
      },
      fontFamily: {
        'monu-bold': ['Monument-bold', 'sans-serif'],
        'irish': ['Irish'],
        'antic': ['Antic', 'sans-serif'],
      },
      "animation": {
        shimmer: "shimmer 2s linear infinite",
        "cloud-in": "cloudIn 2s ease-in-out forwards",
        "cloud-out": "cloudOut 2s ease-in-out forwards",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      "keyframes": {
        shimmer: {
          from: {
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          }
        },
        cloudIn: {
          "0%": { transform: "scale(1)", opacity: "0.5" },
          "25%": { transform: "scale(2)", opacity: "0.7" },
          "50%": { transform: "scale(3)", opacity: "0.9" },
          "100%": { transform: "scale(5)", opacity: "1" },
        },
        cloudOut: {
          "0%": { transform: "scale(5)", opacity: "1" },
          "25%": { transform: "scale(3)", opacity: "0.9" },
          "50%": { transform: "scale(2)", opacity: "0.7" },
          "100%": { transform: "scale(1)", opacity: "0" },
        },

        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },

    },
  },
  plugins: [],
}

