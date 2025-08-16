import Header from "./components/Header/Header";
import PrayerTimes from "./components/PrayerTimes/PrayerTimes";
import Azkar from "./components/Azkar/Azkar";

const App = () => {
    return (
        <div className="app min-h-screen flex flex-col">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="flex-1 w-full px-4 py-4">
                <div className="flex flex-col md:flex-row w-full gap-6 items-stretch">
                    <div className="w-full md:w-1/2 flex">
                        <PrayerTimes />
                    </div>
                    <div className="w-full md:w-1/2 flex">
                        <Azkar />
                    </div>
                </div>
            </main>

            {/* Footer */}
        </div>
    );
};

export default App;
