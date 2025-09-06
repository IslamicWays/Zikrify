// constants.js - App-wide constants and configuration
// PSEUDO CODE & LEARNING HINTS:

/*
CONSTANTS PURPOSE:
- Define app-wide configuration values
- Store API endpoints and keys
- Define UI constants (colors, sizes)
- Islamic calendar and prayer constants
- Error messages and text constants

JAVASCRIPT CONCEPTS TO LEARN:
- Constant declarations with const
- Object freezing for immutability
- Naming conventions for constants
- Module exports for constants
- Configuration management

PSEUDO CONSTANTS STRUCTURE:
1. API configuration constants
2. UI theme constants
3. Prayer time constants
4. Islamic calendar constants
5. Error message constants
6. App configuration constants

HINTS:
- Use UPPER_CASE for constants
- Group related constants in objects
- Use Object.freeze() for immutability
- Consider environment variables
- Document constant purposes
*/

// TODO: Define API constants
// TODO: Define UI theme constants
// TODO: Define prayer time constants
// TODO: Define Islamic calendar constants
// TODO: Define error message constants
// TODO: Export all constants
// Breakpoints
export const SCREENS = {
  bp: "850px", // new breakpoint
};

// Colors
export const COLORS = {
  // Main backgrounds
  dark: "#0a0f0a",
  darker: "#000000",

  // Widget/Card backgrounds
  green: "#1a2f1a", // Prayer times card
  purple: "#2f1a2f", // Quran widget card
  emerald: "#1a3d1a", // Zikr counter card
  teal: "#0d4f3c", // Prayer gradient end
  plum: "#4a2c4a", // Quran gradient end
  forest: "#2d5f2d", // Zikr gradient end

  // Gold theme
  gold: "#d4af37",
  goldDark: "#b8941f",
  goldLight: "rgba(212, 175, 55, 0.1)",
  goldLighter: "rgba(212, 175, 55, 0.05)",
  goldBorder: "rgba(212, 175, 55, 0.3)",
  goldShadow: "rgba(212, 175, 55, 0.3)",

  // Text colors
  white: "#ffffff",
  gray: "#cccccc",
  grayDark: "#666666",

  // Special overlays
  headerBg: "rgba(10, 15, 10, 0.95)",
  cardHover: "rgba(212, 175, 55, 0.2)",
};

// Fonts
export const FONTS = {
  arabic: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "sans-serif",
  ],
};

// Gradients
export const GRADIENTS = {
  prayer: "linear-gradient(135deg, #1a2f1a, #0d4f3c)",
  quran: "linear-gradient(135deg, #2f1a2f, #4a2c4a)",
  zikr: "linear-gradient(135deg, #1a3d1a, #2d5f2d)",
  action:
    "linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.05))",
};

// Shadows
export const SHADOWS = {
  glow: "0 5px 15px rgba(212, 175, 55, 0.3)",
  soft: "0 4px 6px rgba(0, 0, 0, 0.3)",
};

// Border Radius
export const RADII = {
  card: "15px",
  pill: "20px",
  small: "10px",
  tiny: "8px",
};

// Spacing
export const SPACING = {
  nav: "80px",
};

// Z-index
export const ZINDEX = {
  nav: 100,
  popup: 200,
};

// Background class names for autocomplete / tooltips
export const BACKGROUNDCOLORS = [
  "bg-quran",
  "bg-prayer",
  "bg-zikr",
  "bg-action",
] as const;
export type BackgroundColor = typeof BACKGROUNDCOLORS[number];

// API Configuration
const API_ENDPOINTS = {
  // TODO: Define API endpoints
  // PRAYER_TIMES: 'https://api.aladhan.com/v1/timings',
  // QURAN_API: 'https://api.quran.com/api/v4',
  // ISLAMIC_CALENDAR: 'https://api.islamicfinder.us/v1/calendar'
};

// UI Theme Constants
const THEME = {
  // TODO: Define theme colors and sizes
  // COLORS: {
  //   PRIMARY: '#2E7D32',
  //   SECONDARY: '#FFC107',
  //   BACKGROUND: '#F5F5F5'
  // },
  // SIZES: {
  //   HEADER_HEIGHT: '60px',
  //   FOOTER_HEIGHT: '40px'
  // }
};

// Prayer Time Constants
const PRAYER_CONFIG = {
  // TODO: Define prayer-related constants
  // PRAYER_NAMES: ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'],
  // DEFAULT_METHOD: 'ISNA',
  // NOTIFICATION_OFFSET: 5 // minutes before prayer
};

// Islamic Calendar Constants
const ISLAMIC_CALENDAR = {
  // TODO: Define Islamic calendar constants
  // MONTHS: ['Muharram', 'Safar', 'Rabi al-awwal', ...],
  // EPOCH: new Date('622-07-16') // Hijri epoch
};

// Error Messages
const ERROR_MESSAGES = {
  // TODO: Define error messages
  // LOCATION_DENIED: 'Location access denied',
  // API_ERROR: 'Failed to fetch data',
  // NETWORK_ERROR: 'Network connection error'
};

// App Configuration
const APP_CONFIG = {
  // TODO: Define app configuration
  // NAME: 'Zikrify',
  // VERSION: '1.0.0',
  // DEFAULT_LANGUAGE: 'en'
};

export {
  API_ENDPOINTS,
  THEME,
  PRAYER_CONFIG,
  ISLAMIC_CALENDAR,
  ERROR_MESSAGES,
  APP_CONFIG,
};
