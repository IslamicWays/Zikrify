/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       colors: {
        black: "#000000",   // black background
        darkGray: "#1C1C1C",         // dark gray card background
        gold: "#F6C90E",       // gold/yellow highlight
        white: "#FFFFFF",         // main white text
        lightGray: "#B0B0B0",    // gray secondary text
        green: "#22C55E",      // green highlight
        purple: "#d616d683",  // the purple background color
        darkPurple: "#4d313d", // even darker purple
      },
    },
  },
  plugins: [],
};
