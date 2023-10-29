const apiKey = '6a2ef30df3d413af242d6fef1d2e7125';

async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();
        if (data.cod !== 200) {
            throw new Error(data.message || 'City not found');
        }
        return data;
    } catch (error) {
        throw new Error('Error fetching weather data');
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const weatherDescription = weather[0].description;
    const weatherInfo = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Description: ${weatherDescription}</p>
    `;
    document.getElementById('weather-container').innerHTML = weatherInfo;
}

document.getElementById('search-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    if (city) {
        try {
            document.getElementById('loading-indicator').classList.remove('hidden');
            const weatherData = await getWeather(city);
            displayWeather(weatherData);
        } catch (error) {
            console.error(error.message);
        } finally {
            document.getElementById('loading-indicator').classList.add('hidden');
        }
    }
});
