import React, { useEffect, useState } from 'react';

const LOCAL_STORAGE_CITY_KEY = 'selected_city';

interface PrayerTime {
  name: string;
  time: string;
}

interface NextPrayer {
  name: string;
  time: Date;
}

const PRAYER_NAMES: Record<string, string> = {
  fajr: 'الفجر',
  dhuhr: 'الظهر',
  asr: 'العصر',
  maghrib: 'المغرب',
  isha: 'العشاء',
};

const cities: { name: string; lat: number; lon: number }[] = [
  { name: 'القاهرة', lat: 30.0444, lon: 31.2357 },
  { name: 'مكة', lat: 21.3891, lon: 39.8579 },
  { name: 'الرياض', lat: 24.7136, lon: 46.6753 },
  { name: 'دبي', lat: 25.276987, lon: 55.296249 },
  { name: 'الدوحة', lat: 25.276987, lon: 51.52 },
  { name: 'عمان', lat: 31.9539, lon: 35.9106 },
  { name: 'بيروت', lat: 33.8938, lon: 35.5018 },
];

const PrayerTimes: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState(() => {
  const stored = localStorage.getItem(LOCAL_STORAGE_CITY_KEY);
  const matchedCity = cities.find(city => city.name === stored);
  return matchedCity || cities[0];
});
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([]);
  const [nextPrayer, setNextPrayer] = useState<NextPrayer | null>(null);
  const [countdown, setCountdown] = useState<string>('');

  const calculatePrayerTimes = (lat: number, lon: number) => {
    const tzOffset = new Date().getTimezoneOffset() / -60;
    const pt = (window as any).prayTimes;

    pt.setMethod('Egypt');
    pt.adjust({ asr: 'Hanafi', isha: '90 min' });

    const times = pt.getTimes(new Date(), [lat, lon], tzOffset, 'auto', '24h');

    const prayers: PrayerTime[] = Object.entries(times)
      .filter(([key]) => PRAYER_NAMES[key])
      .map(([key, time]) => ({
        name: PRAYER_NAMES[key],
        time,
      }));

    setPrayerTimes(prayers);
    calculateNextPrayer(times);
  };

  const calculateNextPrayer = (times: Record<string, string>) => {
    const now = new Date();
    let upcoming: NextPrayer | null = null;
    let minDiff = Infinity;

    Object.entries(times).forEach(([key, time]) => {
      if (!PRAYER_NAMES[key]) return;

      const [h, m] = time.split(':').map(Number);
      const prayerDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m);
      const diff = (prayerDate.getTime() - now.getTime()) / 1000;

      if (diff > 0 && diff < minDiff) {
        minDiff = diff;
        upcoming = {
          name: PRAYER_NAMES[key],
          time: prayerDate,
        };
      }
    });

    setNextPrayer(upcoming);
  };

  const formatCountdown = (seconds: number): string => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_CITY_KEY, selectedCity.name);
}, [selectedCity]);


  useEffect(() => {
    calculatePrayerTimes(selectedCity.lat, selectedCity.lon);
  }, [selectedCity]);

  useEffect(() => {
    if (!nextPrayer) return;

    const updateCountdown = () => {
      const now = Date.now();
      const diff = Math.max(0, Math.floor((nextPrayer.time.getTime() - now) / 1000));
      setCountdown(formatCountdown(diff));
    };

    updateCountdown(); // Set immediately
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [nextPrayer]);

  return (
    <div className="bg-black text-white flex items-center justify-center min-h-screen p-4">
      <div className="bg-gradient-to-br from-green to-darkGray border border-gold rounded-xl p-6 w-full max-w-md" dir="rtl">
        <h2 className="text-gold text-lg font-bold text-center mb-4">⏰ أوقات الصلاة</h2>

        <div className="mb-4">
          <label htmlFor="city" className="block text-lightGray text-sm mb-2 text-right">
            اختر المدينة:
          </label>
          <select
            id="city"
            value={selectedCity.name}
            onChange={(e) => {
              const city = cities.find((c) => c.name === e.target.value);
              if (city) setSelectedCity(city);
            }}
            className="w-full bg-black border border-lightGray text-white p-2 rounded"
          >
            {cities.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        <ul className="grid grid-cols-2 gap-3 text-center">
          {prayerTimes.map((prayer) => (
            <li
              key={prayer.name}
              className={`rounded-md px-3 py-2 text-sm font-semibold shadow-sm flex justify-between items-center ${
                nextPrayer?.name === prayer.name
                  ? 'bg-gold text-black'
                  : 'bg-black/30 text-white border border-lightGray'
              }`}
            >
              <span>{prayer.time}</span>
              <span>{prayer.name}</span>
            </li>
          ))}
        </ul>

        {nextPrayer && (
          <div className="mt-4 text-center text-green font-bold text-sm">
            ⏳ الوقت المتبقي لصلاة {nextPrayer.name}: {countdown}
          </div>
        )}
      </div>
    </div>
  );
};

export default PrayerTimes;
