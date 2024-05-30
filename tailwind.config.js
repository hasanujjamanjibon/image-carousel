/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('./img/bg-image.jpg')",
      },
    },
  },
  plugins: [],
};
