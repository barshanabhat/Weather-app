function About() {
  return (
    <main className="page">
      <div className="info-section">
        <h1 className="page-title">About Weather App</h1>

        <p>
          Weather App is a client-side React application that displays
          live weather information for cities around the world.
        </p>

        <h2>Technologies Used</h2>

        <ul>
          <li>React</li>
          <li>Vite</li>
          <li>React Router</li>
          <li>OpenWeatherMap API</li>
          <li>JavaScript</li>
          <li>HTML and CSS</li>
          <li>Browser Local Storage</li>
        </ul>

        <h2>How It Works</h2>

        <p>
          The application uses React components and state to manage the
          selected city, temperature unit, weather information, loading
          status, and errors.
        </p>

        <p>
          Weather information is retrieved asynchronously from the
          OpenWeatherMap REST API. User temperature preferences are saved
          in the browser's Local Storage.
        </p>
      </div>
    </main>
  );
}

export default About;