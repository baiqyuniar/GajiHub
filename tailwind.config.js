/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('./assets/Simple Shiny.png')",
        sprinkle: "url('./assets/Sprinkle.png')",
        curve: "url('./assets/Curve Line.png')",
      },
    },
  },
  plugins: [],
};
