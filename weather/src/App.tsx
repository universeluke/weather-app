import { useEffect, useState } from "react";
import Weather from "./components/Weather";
import styles from "./App.module.scss";
import formatLocalTime from "./utils/formatLocalTime";
import Thermometer from "./components/Thermometer";

type WeatherCondition =
  | "clearDay"
  | "clearNight"
  | "rainyDay"
  | "rainyNight"
  | "cloudyDay"
  | "cloudyNight"
  | "snowyDay"
  | "snowyNight";

interface CurrentWeather {
  time: string;
  temperature_2m: number;
  is_day: 0 | 1;
  cloud_cover: number;
  rain: number;
  snowfall: number;
  wind_speed_10m: number;
}

interface WeatherApiResponse {
  current: CurrentWeather;
}

function App() {
  const [currentLocation, setCurrentLocation] = useState<string | null>(null);
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(
    null
  );
  const [currentWeatherData, setCurrentWeatherData] =
    useState<WeatherApiResponse | null>(null);
  const [dayNight, setDayNight] = useState<WeatherCondition>("clearDay");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
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
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&daily=sunrise,sunset&current=temperature_2m,is_day,cloud_cover,rain,snowfall,wind_speed_10m&timezone=auto&forecast_days=1`;
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

  useEffect(() => {
    if (!currentWeatherData) return;

    if (
      currentWeatherData.current.is_day === 1 &&
      currentWeatherData.current.rain <= 0 &&
      currentWeatherData.current.snowfall <= 0 &&
      currentWeatherData.current.cloud_cover <= 20
    ) {
      setDayNight("clearDay");
    }
    if (
      currentWeatherData.current.is_day === 0 &&
      currentWeatherData.current.rain <= 0 &&
      currentWeatherData.current.snowfall <= 0 &&
      currentWeatherData.current.cloud_cover <= 20
    ) {
      setDayNight("clearNight");
    }
    if (
      currentWeatherData.current.is_day === 1 &&
      currentWeatherData.current.rain <= 0 &&
      currentWeatherData.current.snowfall <= 0 &&
      currentWeatherData.current.cloud_cover > 20
    ) {
      setDayNight("cloudyDay");
    }
    if (
      currentWeatherData.current.is_day === 0 &&
      currentWeatherData.current.rain <= 0 &&
      currentWeatherData.current.snowfall <= 0 &&
      currentWeatherData.current.cloud_cover > 20
    ) {
      setDayNight("cloudyNight");
    }
    if (
      currentWeatherData.current.is_day === 1 &&
      currentWeatherData.current.rain > 0
    ) {
      setDayNight("rainyDay");
    }
    if (
      currentWeatherData.current.is_day === 0 &&
      currentWeatherData.current.rain > 0
    ) {
      setDayNight("rainyNight");
    }
    if (
      currentWeatherData.current.is_day === 1 &&
      currentWeatherData.current.snowfall > 0
    ) {
      setDayNight("snowyDay");
    }
    if (
      currentWeatherData.current.is_day === 0 &&
      currentWeatherData.current.snowfall > 0
    ) {
      setDayNight("snowyNight");
    }
    // setDayNight("clearNight");
  }, [currentWeatherData]);

  const stylesChange = {
    fontColour: {
      clearNight: { color: "white" },
      rainyNight: { color: "white" },
      cloudyNight: { color: "white" },
      snowyNight: { color: "white" },
      clearDay: { color: "white" },
      rainyDay: { color: "white" },
      cloudyDay: { color: "white" },
      snowyDay: { color: "rgba(107, 107, 107, 1)" },
    },
  };

  return (
    <>
      <input
        className={styles.locationTitle}
        style={stylesChange.fontColour[dayNight]}
        autoFocus
        onChange={(e) => setCurrentLocation(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            getData();
          }
        }}
      ></input>
      {currentWeatherData ? (
        <div
          className={styles.weatherInfoContainer}
          style={stylesChange.fontColour[dayNight]}
        >
          <p className={styles.temperature}>
            {currentWeatherData.current.temperature_2m} °C
          </p>
          <Thermometer />
          <p className={styles.time}>
            {formatLocalTime(currentWeatherData.current.time)}
          </p>
        </div>
      ) : null}
      {currentWeatherData ? <Weather conditions={dayNight} /> : ""}
    </>
  );
}

export default App;
