import { useState, useEffect } from "react";

interface CurrentWeather {
  temperature: number;
  weather_descriptions: string[];
  wind_speed: number;
  wind_dir: string;
  humidity: number;
  feelslike: number;
  weather_icons: string[];
}

export const useWeather = (city: string | null | undefined) => {
  const [weather, setWeather] = useState<CurrentWeather | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ message: string } | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!city) return;

      setLoading(true);
      setError(null);

      try {
        const url = `https://api.weatherstack.com/current?access_key=${
          import.meta.env.VITE_API_KEY
        }&query=${city}`;

        const weatherResponse = await fetch(url, {
          method: "GET",
        });
        const weatherData = await weatherResponse.json();

        if (weatherResponse.ok) {
          setWeather(weatherData.current);
        } else {
          setError({ message: weatherData.message });
        }
      } catch (error) {
        setError({
          message:
            error instanceof Error ? error.message : "Something went wrong",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { weather, loading, error };
};
