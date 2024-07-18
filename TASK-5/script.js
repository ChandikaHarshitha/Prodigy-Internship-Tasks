async function getWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = 'd6814bafc8e99a10ab154bf7c53a3d50'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            displayWeather(data);
        } else {
            alert('Location not found');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weatherContainer');
    const weatherImage = document.getElementById('weatherImage');
    const weatherInfo = document.getElementById('weatherInfo');

    const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherImage.style.backgroundImage = `url(${weatherIcon})`;

    weatherInfo.innerHTML = `
        <div>Location: ${data.name}, ${data.sys.country}</div>
        <div>Temperature: ${data.main.temp}°C</div>
        <div>Condition: ${data.weather[0].description}</div>
        <div>Humidity: ${data.main.humidity}%</div>
        <div>Wind Speed: ${data.wind.speed} m/s</div>
    `;

    weatherContainer.style.display = 'block';
}
