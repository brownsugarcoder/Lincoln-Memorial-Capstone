// src/components/Weather.jsx
import React, { useState, useEffect } from 'react';
import './Weather.css';

const Weather = () => {
  const [weather, setWeather] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const apiKey = '0d119f4d487cb8381ac5c2e37f75bf93';
    const city = 'Washington, D.C., US';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) =>
        setWeather({
          data,
          loading: false,
          error: null,
        })
      )
      .catch((error) =>
        setWeather({
          data: null,
          loading: false,
          error: error.message,
        })
      );
  }, []);

  const { data, loading, error } = weather;

  if (loading) {
    return <div className="weather-container">Loading...</div>;
  }

  if (error) {
    return <div className="weather-container error">Error: {error}</div>;
  }

  const {
    main: { temp },
    weather: weatherDetails,
  } = data;

  const { description, icon } = weatherDetails[0];

  return (
    <div className="weather-container">
      <h3 className="location">Washington, D.C.</h3>
      <div className="weather-info">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          className="weather-icon"
        />
        <div className="weather-details">
          <p className="temperature">{temp}°F</p>
          <p className="description">{description.charAt(0).toUpperCase() + description.slice(1)}</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
