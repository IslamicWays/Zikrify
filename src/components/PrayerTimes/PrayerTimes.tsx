import React, { useEffect, useState } from 'react';

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

const cities = [
  { name: "القاهرة", lat: 30.0444, lon: 31.2357 },
  { name: "مكة", lat: 21.3891, lon: 39.8579 },
  { name: "الرياض", lat: 24.7136, lon: 46.6753 },
  { name: "دبي", lat: 25.276987, lon: 55.296249 },
  { name: "الدوحة", lat: 25.276987, lon: 51.5200 },
  { name: "عمان", lat: 31.9539, lon: 35.9106 },
  { name: "بيروت", lat: 33.8938, lon: 35.5018 },
];

const PrayerTimes: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([]);
  const [nextPrayer, setNextPrayer] = useState<NextPrayer | null>(null);
  const [countdown, setCountdown] = useState<string>('');

  const calculatePrayerTimes = (lat: number, lon: number) => {
    const tzOffset = new Date().getTimezoneOffset() / -60;
    const pt = (window as any).prayTimes;

    pt.setMethod('Egypt');
    pt.adjust({ asr: 'Hanafi', isha: '90 min' });

    const times = pt.getTimes(new Date(), [lat, lon], tzOffset, 'auto', '24h');

    const prayers = Object.entries(times)
      .filter(([key]) => PRAYER_NAMES[key])
      .map(([key, time]) => ({ name: PRAYER_NAMES[key], time }));

    setPrayerTimes(prayers);
    calculateNextPrayer(times);
  };

  const calculateNextPrayer = (times: Record<string, string>) => {
    const now = new Date();
    let upcoming = null;
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

  useEffect(() => {
    calculatePrayerTimes(selectedCity.lat, selectedCity.lon);
  }, [selectedCity]);

  useEffect(() => {
    if (!nextPrayer) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = Math.max(0, Math.floor((nextPrayer.time.getTime() - now) / 1000));

      const h = String(Math.floor(diff / 3600)).padStart(2, '0');
      const m = String(Math.floor((diff % 3600) / 60)).padStart(2, '0');
      const s = String(diff % 60).padStart(2, '0');

      setCountdown(`${h}:${m}:${s}`);
    }, 1000);

    return () => clearInterval(interval);
  }, [nextPrayer]);

  return (
    <div className="bg-black text-white flex items-center justify-center p-4">
      <div
  className="bg-gradient-to-br from-green to-darkGray border border-gold rounded-xl p-4"
  dir="rtl"
>
        <h2 className="text-gold text-lg font-bold text-center mb-4">⏰ أوقات الصلاة</h2>
        <div>
            <label
  htmlFor="city"
  className="block mb-1 text-lightGray text-right w-full"
  dir="rtl"
>
        اختر المدينة:
        <select
          value={selectedCity.name}
          onChange={(e) => {
            const city = cities.find((c) => c.name === e.target.value);
            if (city) setSelectedCity(city);
          }}
          style={{ margin: '10px' }}
        >
          {cities.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </label>
        </div>

  <ul className="grid grid-cols-2 gap-3 text-center">
    {prayerTimes.map((prayer) => (
      <li
        key={prayer.name}
        className={`rounded-md px-3 py-2 text-sm font-semibold shadow 
          flex justify-between items-center
          ${
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
