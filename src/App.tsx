import React from "react";

// ✅ 2. Import components
import Header from "./components/Header/Header";
import PrayerTimes from "./components/PrayerTimes/PrayerTimes";
import Azkar from "./components/Azkar/Azkar";


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

    {/* Footer  */}  
    </div>
  );
};

export default App;
