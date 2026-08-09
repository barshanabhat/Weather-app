function WeatherCard({ weather, unit }) {
  const temperature =
    unit === 'C'
      ? `${weather.main.temp}°C`
      : `${((weather.main.temp * 9) / 5 + 32).toFixed(2)}°F`;

  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>

      <p>Temperature: {temperature}</p>

      <p>Humidity: {weather.main.humidity}%</p>

      <p>Conditions: {weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;