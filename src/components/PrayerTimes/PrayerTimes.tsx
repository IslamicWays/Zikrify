import React, { useEffect, useState, useCallback } from "react";
import CustomCard from "../../utils/Card/CustomCard";

const LOCAL_STORAGE_CITY_KEY = "selected_city";

interface PrayerTime {
  name: string;
  time: string;
}

interface NextPrayer {
  name: string;
  time: Date;
}

interface PrayTimesLibrary {
  setMethod: (method: string) => void;
  adjust: (adjustments: Record<string, string>) => void;
  getTimes: (
    date: Date,
    coords: number[],
    timezone: number,
    dst: string,
    format: string
  ) => Record<string, string>;
}

declare global {
  interface Window {
    prayTimes: PrayTimesLibrary;
  }
}

const PRAYER_NAMES: Record<string, string> = {
  fajr: "الفجر",
  dhuhr: "الظهر",
  asr: "العصر",
  maghrib: "المغرب",
  isha: "العشاء",
};

const cities = [
  { name: "القاهرة", lat: 30.0444, lon: 31.2357 },
  { name: "مكة", lat: 21.3891, lon: 39.8579 },
  { name: "الرياض", lat: 24.7136, lon: 46.6753 },
  { name: "دبي", lat: 25.276987, lon: 55.296249 },
  { name: "الدوحة", lat: 25.276987, lon: 51.52 },
  { name: "عمان", lat: 31.9539, lon: 35.9106 },
  { name: "بيروت", lat: 33.8938, lon: 35.5018 },
];

const PrayerTimes: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_CITY_KEY);
    return cities.find((city) => city.name === stored) || cities[0];
  });

  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([]);
  const [nextPrayer, setNextPrayer] = useState<NextPrayer | null>(null);
  const [countdown, setCountdown] = useState<string>("");

  const formatCountdown = (seconds: number): string => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const calculateNextPrayer = useCallback((times: Record<string, string>) => {
    const now = new Date();
    let upcoming: NextPrayer | null = null;
    let minDiff = Infinity;

    for (const [key, time] of Object.entries(times)) {
      if (!PRAYER_NAMES[key]) continue;

      const [h, m] = time.split(":").map(Number);
      const prayerDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        h,
        m
      );
      const diff = (prayerDate.getTime() - now.getTime()) / 1000;

      if (diff > 0 && diff < minDiff) {
        minDiff = diff;
        upcoming = {
          name: PRAYER_NAMES[key],
          time: prayerDate,
        };
      }
    }

    // If no upcoming prayer found (after Isha), set next Fajr for tomorrow
    if (!upcoming && times.fajr) {
      const [h, m] = times.fajr.split(":").map(Number);
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(h, m, 0, 0);

      upcoming = {
        name: PRAYER_NAMES.fajr,
        time: tomorrow,
      };
    }

    setNextPrayer(upcoming);
  }, []);

  const calculatePrayerTimes = useCallback(
    (lat: number, lon: number) => {
      const pt = window.prayTimes;
      pt.setMethod("Egypt");
      pt.adjust({ asr: "Hanafi", isha: "90 min" });

      const tzOffset = new Date().getTimezoneOffset() / -60;
      const times = pt.getTimes(
        new Date(),
        [lat, lon],
        tzOffset,
        "auto",
        "24h"
      );

      const prayers = Object.entries(times)
      .filter(([key]) => PRAYER_NAMES[key])
      .map(([key, time]) => ({
        name: PRAYER_NAMES[key],
        time: time as string,
      }));

      setPrayerTimes(prayers);
      calculateNextPrayer(times);
    },
    [calculateNextPrayer]
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_CITY_KEY, selectedCity.name);
  }, [selectedCity]);

  useEffect(() => {
    calculatePrayerTimes(selectedCity.lat, selectedCity.lon);
  }, [selectedCity, calculatePrayerTimes]);

  useEffect(() => {
    if (!nextPrayer) return;

    const updateCountdown = () => {
      const now = Date.now();
      const diff = Math.max(
        0,
        Math.floor((nextPrayer.time.getTime() - now) / 1000)
      );
      setCountdown(formatCountdown(diff));
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [nextPrayer]);

  return (
    <CustomCard
      backgroundColor="bg-prayer"
      header="⏰ أوقات الصلاة"
      className="h-full w-full flex flex-col"
      headerClassName="text-lg font-bold text-center mb-4"
      bodyClassName="flex-1 flex flex-col"
      dir="rtl"
    >
      <div className="mb-4">
        <label
          htmlFor="city"
          className="block text-lightGray text-sm mb-2 text-right"
        >
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

      <ul className="grid grid-cols-2 gap-3 text-center flex-1">
        {prayerTimes.map((prayer) => (
          <li
            key={prayer.name}
            className={`rounded-md px-3 py-2 text-sm font-semibold shadow-sm flex justify-between items-center ${
              nextPrayer?.name === prayer.name
                ? "bg-gold text-black"
                : "bg-black/30 text-white border border-lightGray"
            }`}
          >
            <span>{prayer.time}</span>
            <span>{prayer.name}</span>
          </li>
        ))}
      </ul>

      {nextPrayer && (
        <div className="px-4 py-4 mt-4 text-center text-white font-bold text-sm bg-black/20 rounded-md border border-lightGray/30">
          ⏳ الوقت المتبقي لصلاة {nextPrayer.name}: {countdown}
        </div>
      )}
    </CustomCard>
  );
};

export default PrayerTimes;
