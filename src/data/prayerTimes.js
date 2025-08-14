// prayerTimes.js - Prayer times data and configuration
// PSEUDO CODE & LEARNING HINTS:

/*
DATA STRUCTURE PURPOSE:
- Store prayer time calculation methods
- Default prayer times for major cities
- Configuration for prayer time APIs
- Prayer names and display information

JAVASCRIPT CONCEPTS TO LEARN:
- Object configuration patterns
- API endpoint definitions
- Time calculation parameters
- Data transformation functions

PSEUDO DATA STRUCTURE:
1. Prayer names array
2. Calculation methods object
3. Default cities with coordinates
4. API configuration
5. Helper functions for time formatting

HINTS:
- Use Islamic Society of North America (ISNA) method
- Include major cities as defaults
- Store latitude/longitude for calculations
- Consider different madhabs/schools
- Add prayer time adjustment options
*/

// TODO: Define prayer names array
// TODO: Create calculation methods object
// TODO: Add default cities with coordinates
// TODO: Configure API endpoints
// TODO: Add helper functions
// TODO: Export all data and functions

const prayerNames = [
  // TODO: Add prayer names (Fajr, Dhuhr, Asr, Maghrib, Isha)
];

const calculationMethods = {
  // TODO: Add different calculation methods
  // ISNA: { fajr: 15, isha: 15 },
  // MWL: { fajr: 18, isha: 17 },
  // etc.
};

const defaultCities = [
  // TODO: Add major cities with coordinates
  // { name: "Mecca", lat: 21.4225, lng: 39.8262 },
  // { name: "Medina", lat: 24.4539, lng: 39.6040 },
  // etc.
];

const apiConfig = {
  // TODO: Configure prayer times API
  // baseUrl: "http://api.aladhan.com/v1/timings",
  // method: "ISNA"
};

export { prayerNames, calculationMethods, defaultCities, apiConfig };