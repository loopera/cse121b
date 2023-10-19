// IMporting ES  Module
import cities from "./project-cities.js";

// Declaring Variables
const apiKey = '7115d3e4427a2e9c252b2e76619572c2';
const citySelect = document.getElementById('citySelect');
const getWeatherButton = document.getElementById('getWeatherButton');
const weatherInfo = document.getElementById('weatherInfo');



// Array of cities - Transferred into a Module
// const cities = ['New York', 'London', 'Paris', 'Manila', 'Panabo City', 'Tokyo', 'Salt Lake City', 'Davao City', 'Berlin'];


// Use the map method to create an array of option elements for the city dropdown
const cityOptions = cities.map((city) => {
  const option = document.createElement('option');
  option.value = city;
  option.text = city;
  return option;
});

// Append the city options to the citySelect dropdown
cityOptions.forEach((option) => {
  citySelect.appendChild(option);
});

// Event listener for the "Get Weather" button
getWeatherButton.addEventListener('click', () => {
  const selectedCity = citySelect.value;

  // Check if a city is selected
  if (selectedCity) {
    getWeather(selectedCity);
  } else {
    weatherInfo.textContent = 'Please select a city first.';
  }
});



// Function to fetch weather data from OpenWeatherMap. Using Fetch()

function getWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const temperature = data.main.temp - 273.15; // Convert to Celsius
      const description = data.weather[0].description;

      let recommendation = '';

      // Perform conditional branching based on weather conditions
      if (description.includes('rain')) {
        recommendation = 'Don\'t forget your umbrella!';
      } else if (description.includes('clouds')) {
        recommendation = 'It might be cloudy today.';
      } else if (description.includes('clear')) {
        recommendation = 'Enjoy the clear skies!';
      } else {
        recommendation = 'Stay warm.';
      }

      const weatherText = `Weather in ${city}: <br>${description} <br><br>Temperature: ${temperature.toFixed(2)}°C. <br><br>${recommendation}`;
      weatherInfo.innerHTML = weatherText;
    })
}