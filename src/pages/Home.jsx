import { useState, useEffect } from 'react';
import WeatherCard from '../components/WeatherCard';

function Home() {
  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [unit, setUnit] = useState('C');

  useEffect(() => {
    const savedUnit = localStorage.getItem('weatherUnit');

    if (savedUnit) {
      setUnit(savedUnit);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('weatherUnit', unit);
  }, [unit]);

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true);
      setError('');

      try {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
          throw new Error('Unable to fetch weather data.');
        }

        const data = await response.json();

        setWeather(data);
      } catch (error) {
        setError(error.message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  return (
    <main className="page">
      <h1 className="page-title">Weather Dashboard</h1>

      <div className="controls">
        <div className="control-group">
          <label htmlFor="city">Choose a city:</label>

          <select
            id="city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          >
            <option value="London">London</option>
            <option value="New York">New York</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Sydney">Sydney</option>
            <option value="Paris">Paris</option>
          </select>
        </div>

        <div className="control-group">
          <label htmlFor="unit">Temperature Unit:</label>

          <select
            id="unit"
            value={unit}
            onChange={(event) => setUnit(event.target.value)}
          >
            <option value="C">Celsius (°C)</option>
            <option value="F">Fahrenheit (°F)</option>
          </select>
        </div>
      </div>

      {loading && <p>Loading weather...</p>}

      {error && <p>{error}</p>}

      {weather && !loading && (
        <WeatherCard weather={weather} unit={unit} />
      )}
    </main>
  );
}

export default Home;