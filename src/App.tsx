import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import PrayerTimes from "./components/PrayerTimes/PrayerTimes";
import Azkar from "./components/Azkar/Azkar";
import QuranPage from "./pages/QuranPage";

function HomePage() {
  return (
    <main className="flex-1 w-full px-4 py-4">
      <div className="flex flex-col sm:flex-row w-full gap-6 items-stretch">
        <div className="w-full md:w-1/2 flex">
          <Azkar />
        </div>
        <div className="w-full md:w-1/2 flex">
          <PrayerTimes />
        </div>
      </div>
    </main>
  );
}

const App = () => {
  return (
    <Router>
      <div className="app min-h-screen flex flex-col">
        {/* Header */}
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quran" element={<QuranPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
