/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        fontFamily: {
          nothing: ["Nothing You Could Do", "cursive"], 
          square: ["Square Peg", "cursive"], 
        }, 
      },
    },
    plugins: [],
  };