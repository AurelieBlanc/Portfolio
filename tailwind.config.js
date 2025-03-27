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
          bangers: ["Bangers", "system-ui"], 
          lilita : ["Lilita One", "sans-serif"]
        },
        colors: {
          "vertLight" : "#CCC14E", 
          "vertDark" : "#106552", 
          "blueDark" : "#06869D", 
          "sable" : "#DB976D", 
          "prune" : "#A91A5F", 
          "gris" : "#A6A7A7", 
          "parchemin": "#EFD2AB"
        } 
      },
    },
    plugins: [],
  };