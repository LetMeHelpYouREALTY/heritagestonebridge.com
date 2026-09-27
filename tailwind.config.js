/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        hsb: {
          primary: "#865022",
          "primary-dark": "#72441D",
          "primary-light": "#9A6C42",
          accent: "#A27A48",
          "accent-dark": "#8A6338",
          "accent-light": "#BA9568",
          dark: "#2D3B36",
          text: "#3D4A45",
          muted: "#6B7B75",
          cream: "#F8F5F0",
          sand: "#EDE6DB",
          border: "#DDD5CA",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
