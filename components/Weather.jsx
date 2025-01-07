// src/components/Weather.jsx

import React, { useState, useEffect } from 'react';
import './Weather.css';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchWeather = async () => {
      
      const apiKey = '89f39ba0b4cacf70d77be43573527ca6';
      const city = 'Washington,DC';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

      try {
        const response = await axios.get(url);
        setWeatherData(response.data);
      } catch (err) {
        console.error('Error fetching weather data:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    
    
    fetchWeather();
  }, []);
  if (loading) {
    return <div className="weather-container">Loading...</div>;
  }

  if (error) {
    return <div className="weather-container">Error fetching weather data.</div>;
  }

  return (
    <div className="weather-container">
      {weatherData ? (
        <>
          <p className="location">Washington, D.C.</p>
          <p className="temperature">{weatherData.main.temp}°F</p>
          <p className="description">{weatherData.weather[0].description}</p>
          {weatherData.weather[0].icon && (
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
              className="weather-icon"
            />
          )}
        </>
      ) : (
        <p>No weather data available.</p>
      )}
    </div>
  );
};

export default Weather;
