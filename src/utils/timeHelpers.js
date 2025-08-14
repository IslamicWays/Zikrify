// timeHelpers.js - Time-related utility functions
// PSEUDO CODE & LEARNING HINTS:

/*
UTILITY PURPOSE:
- Format time for display
- Calculate time differences
- Convert between time formats
- Handle Islamic calendar dates
- Prayer time calculations

JAVASCRIPT CONCEPTS TO LEARN:
- Date object manipulation
- Time formatting functions
- Mathematical calculations
- String formatting
- Function composition

PSEUDO FUNCTIONS STRUCTURE:
1. formatTime - Format time for display (12/24 hour)
2. calculateTimeDifference - Get difference between times
3. getNextPrayerTime - Find next prayer from current time
4. formatCountdown - Format countdown timer display
5. getIslamicDate - Get current Hijri date
6. isTimeInRange - Check if current time is in range

HINTS:
- Use Date object methods
- Handle timezone conversions
- Consider 12/24 hour formats
- Add leading zeros for formatting
- Handle edge cases (midnight, etc.)
*/

// TODO: Create formatTime function (12/24 hour format)
// TODO: Create calculateTimeDifference function
// TODO: Create getNextPrayerTime function
// TODO: Create formatCountdown function
// TODO: Create getIslamicDate function
// TODO: Create isTimeInRange function
// TODO: Export all functions

const formatTime = (date, format24Hour = false) => {
  // TODO: Implement time formatting
  // Handle 12/24 hour formats
  // Add AM/PM for 12-hour format
  // Add leading zeros
};

const calculateTimeDifference = (startTime, endTime) => {
  // TODO: Calculate difference between two times
  // Return in hours, minutes, seconds
  // Handle day boundaries
};

const getNextPrayerTime = (prayerTimes, currentTime) => {
  // TODO: Find next prayer from current time
  // Handle end of day (next Fajr)
  // Return prayer name and time
};

const formatCountdown = (timeDifference) => {
  // TODO: Format countdown for display
  // Show hours:minutes:seconds
  // Handle different time units
};

const getIslamicDate = () => {
  // TODO: Get current Hijri date
  // Use Islamic calendar conversion
  // Format for display
};

const isTimeInRange = (currentTime, startTime, endTime) => {
  // TODO: Check if time is within range
  // Handle day boundaries
  // Return boolean
};

export {
  formatTime,
  calculateTimeDifference,
  getNextPrayerTime,
  formatCountdown,
  getIslamicDate,
  isTimeInRange
};