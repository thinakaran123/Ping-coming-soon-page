/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      tablet: "550px",
      pc: "800px",
      monitor: "1000px",
    },
    extend: {
      colors: {
        Blue: "hsl(223, 87%, 63%)",
        PaleBlue: "hsl(223, 100%, 88%)",
        LightRed: "hsl(354, 100%, 66%)",
        Gray: "hsl(0, 0%, 59%)",
        VeryDarkBlue: "hsl(209, 33%, 12%)",
      },
    },
  },
  plugins: [],
};
