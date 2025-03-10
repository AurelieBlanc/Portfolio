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
          bangers: ["Bangers", "system-ui"]
        },
        colors: {
          "vertLight" : "#CCC14E", 
          "vertDark" : "#106552", 
          "blueDark" : "#105E6C", 
          "sable" : "#DB976D", 
          "prune" : "#941B50", 
          "gris" : "#737373"
        } 
      },
    },
    plugins: [],
  };