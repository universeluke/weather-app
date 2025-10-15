import { useEffect, useState } from "react";
import Weather from "./components/Weather";
import styles from "./App.module.scss";
import formatLocalTime from "./utils/formatLocalTime";

function App() {
  const [currentLocation, setCurrentLocation] = useState<string | null>(null);
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(
    null
  );
  const [currentWeatherData, setCurrentWeatherData] = useState<any>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => console.error(error)
    );
  }, []);

  useEffect(() => {
    if (!coords) return;
    const fetchWeather = async () => {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current=temperature_2m,is_day,cloud_cover,rain,snowfall,wind_speed_10m&timezone=auto&forecast_days=1`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setCurrentWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeather();
  }, [coords]);

  async function getData() {
    try {
      const url = `https://geocoding-api.open-meteo.com/v1/search?name=${currentLocation}&count=1`;
      const geo = await fetch(url);
      const geoData = await geo.json();

      if (!geoData.results.length) {
        console.warn("No location found");
        return;
      }
      const newCoords = {
        lat: geoData.results[0].latitude,
        lon: geoData.results[0].longitude,
      };
      setCoords(newCoords);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <input
        className={styles.locationTitle}
        autoFocus
        onChange={(e) => setCurrentLocation(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            getData();
          }
        }}
      ></input>
      {currentWeatherData ? (
        <div className={styles.weatherInfoContainer}>
          <p className={styles.temperature}>
            {currentWeatherData.current.temperature_2m} °C
          </p>
          <p className={styles.time}>
            {formatLocalTime(currentWeatherData.current.time)}
          </p>
        </div>
      ) : null}
      <Weather />
    </>
  );
}

export default App;
