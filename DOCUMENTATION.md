# Zikrify - Islamic Companion App Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Components](#components)
4. [Data Layer](#data-layer)
5. [Custom Hooks](#custom-hooks)
6. [Utilities](#utilities)
7. [Styling System](#styling-system)
8. [Features](#features)
9. [Learning Path](#learning-path)
10. [Implementation Guide](#implementation-guide)

## Project Overview

**Zikrify** is a comprehensive Islamic companion app built with React that provides Muslims with essential daily tools including prayer times, Quran verses, dhikr counter, and quick access to Islamic resources.

### Core Features

- **Prayer Times**: Location-based prayer times with countdown to next prayer
- **Quran Widget**: Browse and read Quran verses with translations
- **Zikr Counter**: Digital tasbih for dhikr counting with multiple options
- **Quick Actions**: Fast access to common Islamic tools and features
- **Notifications**: Prayer time reminders and app notifications

### Technology Stack

- **Frontend**: React.js with functional components and hooks
- **Styling**: CSS3 with custom properties and modular CSS
- **State Management**: React hooks (useState, useEffect, custom hooks)
- **Data Storage**: localStorage for persistence
- **APIs**: Islamic prayer times and Quran APIs

## Architecture

### Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── Header/         # App header with time and navigation
│   ├── PrayerTimes/    # Prayer times display and countdown
│   ├── QuranWidget/    # Quran verse reader
│   ├── ZikrCounter/    # Digital dhikr counter
│   ├── QuickActions/   # Quick access buttons
│   ├── Footer/         # App footer
│   └── Notification/   # Notification system
├── data/               # Static data and configurations
├── hooks/              # Custom React hooks
├── utils/              # Helper functions
├── styles/             # Global styles and design system
├── App.js              # Main application component
└── index.js            # Application entry point
```

### Component Hierarchy

```text
App
├── Header
├── Main Content
│   ├── PrayerTimes
│   ├── QuranWidget
│   ├── ZikrCounter
│   └── QuickActions
├── Footer
└── Notification
```

## Components

### Header Component

**Location**: `src/components/Header/`
**Purpose**: Display app title, current time, and Islamic date

#### Header Features

- Real-time clock display
- Islamic (Hijri) date
- App branding and navigation
- Responsive design for mobile

#### Header Learning Concepts

- `useState` for time state management
- `useEffect` for interval-based updates
- Time formatting and display
- Islamic calendar integration

#### Header Props

None (self-contained)

#### Header State

- `currentTime`: Current date/time object
- `islamicDate`: Current Hijri date

### PrayerTimes Component

**Location**: `src/components/PrayerTimes/`
**Purpose**: Display daily prayer times with next prayer countdown

#### PrayerTimes Features

- Five daily prayer times display
- Next prayer highlighting
- Countdown timer to next prayer
- Location-based prayer times
- Prayer time notifications

#### PrayerTimes Learning Concepts

- Custom hooks usage (`usePrayerTimes`)
- API integration for prayer times
- Time calculations and comparisons
- Geolocation API usage
- Array mapping for prayer display

#### PrayerTimes Props

- `location`: User's geographic location (optional)
- `method`: Prayer calculation method

#### PrayerTimes State

- `prayerTimes`: Object containing all prayer times
- `nextPrayer`: Information about upcoming prayer
- `countdown`: Time remaining to next prayer

### QuranWidget Component

**Location**: `src/components/QuranWidget/`
**Purpose**: Display and navigate Quran verses

#### QuranWidget Features

- Arabic text display with proper RTL formatting
- English translations
- Verse navigation (next/previous)
- Random verse selection
- Surah information display
- Bookmark functionality

#### QuranWidget Learning Concepts

- RTL text handling
- Arabic typography
- Local storage for bookmarks
- Component state management
- API integration for Quran data

#### QuranWidget Props

- `initialVerse`: Starting verse (optional)
- `showTranslation`: Toggle translation display

#### QuranWidget State

- `currentVerse`: Current verse data
- `surahInfo`: Current surah information
- `bookmarks`: Array of bookmarked verses
- `loading`: Loading state for API calls

### ZikrCounter Component

**Location**: `src/components/ZikrCounter/`
**Purpose**: Digital tasbih for dhikr counting

#### ZikrCounter Features

- Multiple dhikr options (SubhanAllah, Alhamdulillah, etc.)
- Customizable count goals (33, 99, 100)
- Progress tracking
- Reset functionality
- Local storage persistence
- Touch-friendly interface

#### ZikrCounter Learning Concepts

- State persistence with localStorage
- Event handling for user interactions
- Progress calculations
- Mobile-friendly UI design
- Custom hooks for storage

#### ZikrCounter Props

- `defaultDhikr`: Initial dhikr selection
- `defaultGoal`: Initial count goal

#### ZikrCounter State

- `count`: Current count value
- `selectedDhikr`: Currently selected dhikr
- `goal`: Target count goal
- `progress`: Calculated progress percentage

### QuickActions Component

**Location**: `src/components/QuickActions/`
**Purpose**: Quick access buttons for common actions

#### QuickActions Features

- Grid layout of action buttons
- Icon-based navigation
- Responsive design
- Accessibility features

#### QuickActions Learning Concepts

- CSS Grid layouts
- Icon integration
- Event handling
- Accessibility (ARIA labels)

#### QuickActions Props

- `actions`: Array of available actions
- `onActionClick`: Callback for action selection

### Footer Component

**Location**: `src/components/Footer/`
**Purpose**: App information and external links

#### Footer Features

- App version and copyright
- Links to Islamic resources
- Contact information
- Social media links (optional)

#### Footer Learning Concepts

- Static content rendering
- External link handling
- Responsive footer design

### Notification Component

**Location**: `src/components/Notification/`
**Purpose**: Display app notifications and alerts

#### Notification Features

- Multiple notification types (success, warning, error)
- Auto-dismiss functionality
- Manual close option
- Slide animations
- Prayer time notifications

#### Notification Learning Concepts

- Conditional rendering
- CSS animations
- Timer management
- Notification positioning

#### Notification Props

- `message`: Notification text
- `type`: Notification type (success/warning/error)
- `duration`: Auto-dismiss duration
- `onClose`: Close callback function

## Data Layer

### verses.js

**Purpose**: Quran verses data storage
**Structure**:

```javascript
{
  id: number,
  surahNumber: number,
  surahName: string,
  verseNumber: number,
  arabicText: string,
  translation: string,
  transliteration: string,
  theme: string
}
```

### prayerTimes.js

**Purpose**: Prayer time configuration and data
**Includes**:

- Prayer names array
- Calculation methods
- Default cities with coordinates
- API configuration

### zikrOptions.js

**Purpose**: Dhikr options and categories
**Structure**:

```javascript
{
  id: number,
  arabicText: string,
  transliteration: string,
  meaning: string,
  category: string,
  recommendedCount: number
}
```

### surahs.js

**Purpose**: Quran chapters information
**Structure**:

```javascript
{
  number: number,
  arabicName: string,
  englishName: string,
  translation: string,
  revelationPlace: string,
  verseCount: number
}
```

## Custom Hooks

### useNotification Hook

**Purpose**: Manage app-wide notifications
**Returns**:

- `notifications`: Array of active notifications
- `showNotification`: Function to display notification
- `hideNotification`: Function to dismiss notification
- `clearNotifications`: Function to clear all notifications

**useNotification Key Features**:

- Browser notification API integration
- Permission handling
- Auto-dismiss timers
- Notification queuing

### usePrayerTimes Hook

**Purpose**: Handle prayer times functionality
**Returns**:

- `prayerTimes`: Object with all prayer times
- `loading`: Loading state
- `error`: Error state
- `nextPrayer`: Next prayer information
- `fetchPrayerTimes`: Function to fetch new times
- `getLocation`: Function to get user location

**usePrayerTimes Key Features**:

- Geolocation integration
- API error handling
- Time calculations
- Caching for offline use

### useLocalStorage Hook

**Purpose**: Simplified localStorage operations
**Parameters**:

- `key`: Storage key
- `initialValue`: Default value

**Returns**:

- `[storedValue, setValue]`: State-like interface

**useLocalStorage Key Features**:

- JSON serialization/deserialization
- Error handling
- React state synchronization

## Utilities

### timeHelpers.js

**Functions**:

- `formatTime(date, format24Hour)`: Format time for display
- `calculateTimeDifference(start, end)`: Calculate time differences
- `getNextPrayerTime(prayers, current)`: Find next prayer
- `formatCountdown(difference)`: Format countdown display
- `getIslamicDate()`: Get current Hijri date
- `isTimeInRange(current, start, end)`: Check time ranges

### arabicHelpers.js

**Functions**:

- `formatArabicText(text)`: Clean and format Arabic text
- `convertToArabicNumbers(numbers)`: Convert to Arabic numerals
- `convertToEnglishNumbers(numbers)`: Convert to English numerals
- `isArabicText(text)`: Check for Arabic characters
- `removeArabicDiacritics(text)`: Remove diacritical marks
- `formatIslamicPhrase(phrase)`: Format Islamic phrases

### constants.js

**Exports**:

- `API_ENDPOINTS`: API configuration
- `THEME`: UI theme constants
- `PRAYER_CONFIG`: Prayer-related constants
- `ISLAMIC_CALENDAR`: Calendar constants
- `ERROR_MESSAGES`: Error message constants
- `APP_CONFIG`: App configuration

## Styling System

### Design Tokens (variables.css)

- **Colors**: Primary (Islamic green), secondary (gold), neutral palette
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Consistent spacing scale (4px base)
- **Layout**: Container sizes, component dimensions
- **Animation**: Transition durations and easing functions

### Global Styles (globals.css)

- CSS reset and normalize
- Base typography
- Accessibility improvements
- Utility classes
- Dark mode support

### Component Styles (components.css)

- Reusable component classes
- Button variants
- Form components
- Layout utilities
- Interactive states

### CSS Architecture

- **BEM Methodology**: Block__Element--Modifier naming
- **CSS Custom Properties**: For theming and consistency
- **Mobile-First**: Responsive design approach
- **Accessibility**: Focus states and ARIA support

## Features

### Prayer Times

- **Location Detection**: Automatic geolocation or manual city selection
- **Multiple Calculation Methods**: ISNA, MWL, Egyptian, etc.
- **Prayer Notifications**: Browser notifications before prayer times
- **Countdown Timer**: Real-time countdown to next prayer
- **Qibla Direction**: Compass pointing to Mecca (future feature)

### Quran Reader

- **Verse Navigation**: Browse by surah and verse
- **Multiple Translations**: English and other languages
- **Arabic Typography**: Proper RTL text rendering
- **Bookmarking**: Save favorite verses
- **Audio Playback**: Verse recitation (future feature)
- **Search Functionality**: Search verses by keyword (future feature)

### Dhikr Counter

- **Multiple Dhikr Options**: SubhanAllah, Alhamdulillah, Allahu Akbar, etc.
- **Goal Setting**: 33, 99, 100, or custom counts
- **Progress Tracking**: Visual progress indicators
- **Persistence**: Save progress across sessions
- **Haptic Feedback**: Mobile vibration on count (future feature)

### Notifications

- **Prayer Reminders**: Customizable prayer time notifications
- **App Messages**: Success, warning, and error notifications
- **Auto-Dismiss**: Configurable auto-hide timers
- **Permission Handling**: Browser notification permissions

## Learning Path

### Beginner Level

1. **Basic React Concepts**
   - Functional components
   - JSX syntax
   - Props and state
   - Event handling

2. **Start with Simple Components**
   - Footer component (static content)
   - Header component (basic state)
   - Notification component (props handling)

3. **CSS Fundamentals**
   - CSS custom properties
   - Flexbox and Grid
   - Responsive design
   - Basic animations

### Intermediate Level

1. **React Hooks**
   - useState for state management
   - useEffect for side effects
   - Custom hooks creation

2. **Complex Components**
   - ZikrCounter (state + localStorage)
   - QuranWidget (API integration)
   - PrayerTimes (geolocation + API)

3. **Data Management**
   - localStorage integration
   - API calls and error handling
   - State persistence

### Advanced Level

1. **Performance Optimization**
   - Component memoization
   - Lazy loading
   - Code splitting

2. **Advanced Features**
   - Service workers
   - Offline functionality
   - Push notifications

3. **Testing**
   - Unit testing with Jest
   - Component testing with React Testing Library
   - Integration testing

## Implementation Guide

### Phase 1: Setup and Basic Structure

1. Set up React project structure
2. Implement global styles and design system
3. Create basic Header and Footer components
4. Set up routing (if needed)

### Phase 2: Core Components

1. Implement ZikrCounter with localStorage
2. Create QuranWidget with static data
3. Build PrayerTimes with mock data
4. Add Notification system

### Phase 3: Data Integration

1. Integrate prayer times API
2. Add Quran API integration
3. Implement geolocation features
4. Add data persistence

### Phase 4: Enhanced Features

1. Add prayer notifications
2. Implement bookmarking
3. Add search functionality
4. Optimize for mobile

### Phase 5: Polish and Optimization

1. Add animations and transitions
2. Implement error boundaries
3. Add loading states
4. Performance optimization

### Development Tips

1. **Start Small**: Begin with static components before adding dynamic features
2. **Test Frequently**: Test each component as you build it
3. **Mobile First**: Design for mobile devices first
4. **Accessibility**: Include ARIA labels and keyboard navigation
5. **Error Handling**: Always handle API errors and edge cases
6. **Documentation**: Comment your code and document complex logic

### Common Challenges and Solutions

1. **Arabic Text Rendering**: Use proper Unicode and RTL CSS
2. **Time Zone Handling**: Use proper date libraries and UTC conversions
3. **API Rate Limits**: Implement caching and error handling
4. **Mobile Performance**: Optimize images and minimize bundle size
5. **Browser Compatibility**: Test across different browsers and devices

This documentation provides a comprehensive guide for understanding and implementing the Zikrify Islamic companion app. Each section includes learning hints and pseudo code to help you understand React concepts while building a meaningful Islamic application.