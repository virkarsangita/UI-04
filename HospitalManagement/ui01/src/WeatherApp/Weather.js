import React, { useState } from "react";
import './Weather.css';
const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) {
      setError("Please enter city name");
      return;
    }

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY`
      );
      const data = await res.json();

      if (data.cod === "404") {
        setError("City not found");
        setWeather(null);
      } else {
        setWeather(data);
        setError("");
      }
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="container mt-5 text-center">
      <h2>🌤 Weather App</h2>

      <input
        type="text"
        className="form-control mt-3"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button className="btn btn-primary mt-3" onClick={getWeather}>
        Get Weather
      </button>

      {error && <p className="text-danger mt-3">{error}</p>}

      {weather && (
        <div className="card mt-4 p-3">
          <h4>{weather.name}</h4>
          <p>🌡 Temperature: {weather.main.temp} °C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬 Wind: {weather.wind.speed} km/h</p>
          <p>☁ Condition: {weather.weather[0].main}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
