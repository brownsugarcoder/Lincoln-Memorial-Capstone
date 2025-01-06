// src/components/Weather.jsx

import React, { useState, useEffect } from 'react';
import './Weather.css';
import axios from 'axios';

const Weather = () => {
  // State to hold weather data
  const [weatherData, setWeatherData] = useState(null);
  
  // State to handle loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the async function inside useEffect
    const fetchWeather = async () => {
      const options = {
        method: 'GET',
        url: 'https://api.weatherstack.com/current',
        params: {
          access_key: '18bcd8abf8f28ea748a0a7e9fe763733',
          query: 'Washington, DC ',
          units : 'f',
        },
      };
      
      try {
        const response = await axios.request(options);
        setWeatherData(response.data);
      } catch (err) {
        console.error('Error fetching weather data:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    
    // Call the async function
    fetchWeather();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // Conditional rendering based on state
  if (loading) {
    return <div className="weather-container">Loading...</div>;
  }

  if (error) {
    return <div className="weather-container">Error fetching weather data.</div>;
  }

  return (
    <div className="weather-container">
    {weatherData && weatherData.current ? (
      <>
        <p className="location">Washington, D.C.</p>
        <p className="temperature">{weatherData.current.temperature}°F</p>
        <p className="description">{weatherData.current.weather_descriptions[0]}</p>
        {weatherData.current.weather_icons[0] && (
          <img
            src={[0]}
            alt=""
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
