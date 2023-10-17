// This module provides weather recommendations based on weather conditions.

// Export a function that takes the weather description as input

// Perform conditional branching based on weather conditions

export function getWeatherRecommendation(weatherDescription) {
    if (weatherDescription.includes('rain')) {
        return 'Don\'t forget your umbrella!';
    } else if (weatherDescription.includes('clouds')) {
        return 'It might be cloudy today.';
    } else if (weatherDescription.includes('clear')) {
        return 'Enjoy the clear skies!';
    } else {
        return 'No specific recommendation for this weather.';
    }
}
