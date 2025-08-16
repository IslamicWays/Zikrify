/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Main backgrounds
        dark: "#0a0f0a", // Main dark background
        darker: "#000000", // Footer and deep sections

        // Widget/Card backgrounds
        green: "#1a2f1a", // Prayer times card
        purple: "#2f1a2f", // Quran widget card
        emerald: "#1a3d1a", // Zikr counter card
        teal: "#0d4f3c", // Prayer gradient end
        plum: "#4a2c4a", // Quran gradient end
        forest: "#2d5f2d", // Zikr gradient end

        // Gold theme (main brand color)
        gold: "#d4af37", // Main gold accent
        goldDark: "#b8941f", // Darker gold for hover
        goldLight: "rgba(212, 175, 55, 0.1)", // Light gold background
        goldLighter: "rgba(212, 175, 55, 0.05)", // Very light gold
        goldBorder: "rgba(212, 175, 55, 0.3)", // Gold border
        goldShadow: "rgba(212, 175, 55, 0.3)", // Gold glow effect

        // Text colors
        white: "#ffffff", // Main text
        gray: "#cccccc", // Secondary text
        grayDark: "#666666", // Muted text

        // Special overlays
        headerBg: "rgba(10, 15, 10, 0.95)", // Header background
        cardHover: "rgba(212, 175, 55, 0.2)", // Card hover effect
      },

      // Typography
      fontFamily: {
        arabic: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },

      // Background gradients with simple names
      backgroundImage: {
        prayer: "linear-gradient(135deg, #1a2f1a, #0d4f3c)",
        quran: "linear-gradient(135deg, #2f1a2f, #4a2c4a)",
        zikr: "linear-gradient(135deg, #1a3d1a, #2d5f2d)",
        action:
          "linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.05))",
      },

      // Simple shadow names
      boxShadow: {
        glow: "0 5px 15px rgba(212, 175, 55, 0.3)",
        soft: "0 4px 6px rgba(0, 0, 0, 0.3)",
      },

      // Simple border radius names
      borderRadius: {
        card: "15px",
        pill: "20px",
        small: "10px",
        tiny: "8px",
      },

      // Common spacing
      spacing: {
        nav: "80px",
      },

      // Layer ordering
      zIndex: {
        nav: "100",
        popup: "200",
      },
    },
  },
  plugins: [],
};
