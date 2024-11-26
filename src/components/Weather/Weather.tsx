import style from "./Weather.module.css";

import { useWeather } from "../../helpers/hooks/useFetchWeather";
import { Loading } from "../Loading/Loading";

export function Weather({ capital }: { capital: string | null | undefined }) {
  const { weather, loading } = useWeather(capital);

  if (loading) {
    return <Loading />;
  }

  if (!weather) {
    return <p>No weather data available</p>;
  }
  return (
    <div className={style.container}>
      <h2>Current Weather in {capital}</h2>
      <div className={style.weatherDetails}>
        <p>Temperature: {weather.temperature}°C</p>
        <p>Feels Like: {weather.feelslike}°C</p>
        <p>Condition: {weather.weather_descriptions[0]}</p>
        <p>Humidity: {weather.humidity}%</p>
        <p>Wind Speed: {weather.wind_speed} km/h</p>
        <p>Wind Direction: {weather.wind_dir}</p>
        <img className={style.weatherIcon} src={weather.weather_icons[0]} alt="Weather Icon" />
      </div>
    </div>
  );
}
