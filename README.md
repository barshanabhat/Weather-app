# Weather App

A responsive, client-side multi-page weather application built with React and Vite.

The application allows users to view live weather information for different cities, switch between Celsius and Fahrenheit, navigate between multiple pages, and save their temperature-unit preference using browser Local Storage.

## Features

- Live weather information using the OpenWeatherMap REST API
- Temperature, humidity, and weather conditions
- Five global city selections
- Celsius and Fahrenheit temperature units
- Temperature-unit persistence using Local Storage
- Client-side navigation using React Router
- Shared navigation bar
- Home, About, and Contact pages
- Loading and error handling
- Responsive design for desktop and mobile devices
- Accessible contact form with paired labels and inputs

## Technologies Used

- React
- Vite
- JavaScript
- React Router
- OpenWeatherMap API
- HTML
- CSS
- Browser Local Storage

## API

This project uses the OpenWeatherMap Current Weather Data API to retrieve live weather information.

The API provides:

- Temperature
- Humidity
- Weather conditions
- City information

The application sends a request based on the city selected by the user.

## Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   └── WeatherCard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx