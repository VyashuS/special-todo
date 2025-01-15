import React, { useEffect, useState } from "react";
import axios from "axios";
// import "../styles/TodoPage.css";

const WeatherInfo = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY"
      )
      .then((response) => setWeather(response.data))
      .catch((error) => console.error(error));
  }, []);

  return weather ? (
    <div className="weather-info">
      <p>City: {weather.name}</p>
      <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
    </div>
  ) : (
    <p>Loading weather data...</p>
  );
};

export default WeatherInfo;
