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
  APP_CONFIG
};