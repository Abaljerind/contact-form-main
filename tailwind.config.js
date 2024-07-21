/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      fontFamily: {
        karla: ["Karla"],
      },
      colors: {
        "green-sm": "#dff0e7",
        "green-md": "#0c7d68",
        redd: "#d73c3c",
        "grey-md": "#86a2a6",
        "grey-xl": "#2a4245",
      },
    },
  },
  plugins: [],
};
