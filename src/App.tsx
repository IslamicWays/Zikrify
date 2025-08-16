// App.js - Main application component

/*
MAIN APP COMPONENT PURPOSE:
- Root component that renders all other components
- Manage global app state
- Handle routing (if using React Router)
- Provide context providers
- Layout structure for the entire app

REACT CONCEPTS TO LEARN:
- Component composition
- Props passing between components
- State management (useState, useContext)
- Component lifecycle with useEffect
- Conditional rendering
- CSS imports and styling

PSEUDO CODE STRUCTURE:
1. Import React and all components
2. Import global styles
3. Create App functional component
4. Set up global state (notifications, theme, etc.)
5. Return JSX with:
   - Header component
   - Main content area with all widgets
   - Footer component
   - Notification component

HINTS:
- Use semantic HTML structure (header, main, footer)
- Consider responsive layout (CSS Grid or Flexbox)
- Pass props to child components
- Handle global state with Context API or props
- Import and use all created components
*/

// ✅ 1. Import React and hooks
import React from "react";

// ✅ 2. Import components
import Header from "./components/Header/Header";
import PrayerTimes from "./components/PrayerTimes/PrayerTimes";
import Azkar from "./components/Azkar/Azkar";

// TODO: Import more components when created
// import QuranWidget from "./components/QuranWidget/QuranWidget";
// import ZikrCounter from "./components/ZikrCounter/ZikrCounter";
// import QuickActions from "./components/QuickActions/QuickActions";
// import Footer from "./components/Footer/Footer";
// import Notifications from "./components/Notifications/Notifications";

// ✅ 3. Create App functional component
const App = () => {
  // TODO: Add global state management
  // Example: const [theme, setTheme] = useState("light");
  // Example: const { notifications } = useNotification();

  // ✅ 4. Return JSX with structured layout
  return (
    <div className="app min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 m-2">
        <div className="flex flex-wrap gap-4 w-full">
          <div className="flex-1 min-w-[300px]">
            <PrayerTimes />
          </div>
          <div className="flex-1 min-w-[300px]">
            <Azkar />
          </div>
        </div>
      </main>


      {/* Footer (TODO: add later) */}
      {/* <Footer /> */}

      {/* Notifications (TODO: add later) */}
      {/* <Notifications /> */}
    </div>
  );
};

// ✅ 5. Export App component
export default App;
