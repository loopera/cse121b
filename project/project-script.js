// Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
const API_KEY = '58fb390d55204b9a73e729ace1b7cda5';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const submitBtn = document.getElementById('submitBtn');
const currentWeather = document.getElementById('currentWeather');
const forecast = document.getElementById('forecast');

submitBtn.addEventListener('click', () => {
    const location = locationInput.value;
    if (!location) {
        alert('Please enter a location.');
        return;
    }

    // Construct the API URL
    const apiUrl = `${API_URL}?q=${location}&appid=${API_KEY}&units=metric`; // Units=metric for Celsius

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const description = data.weather[0].description;

            // Display current weather
            currentWeather.innerHTML = `
        Temperature: ${temperature}°C<br>
        Humidity: ${humidity}%<br>
        Wind Speed: ${windSpeed} m/s<br>
        Description: ${description}
      `;
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
});