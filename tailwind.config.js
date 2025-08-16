/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       colors: {
        background: "#000000",   // black background
        card: "#1C1C1C",         // dark gray card background
        accent: "#F6C90E",       // gold/yellow highlight
        text: "#FFFFFF",         // main white text
        secondary: "#B0B0B0",    // gray secondary text
        success: "#22C55E",      // green highlight
      },
    },
  },
  plugins: [],
};
