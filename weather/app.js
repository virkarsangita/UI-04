async function getWeather() {

    const city = document.getElementById("cityInput").value;
    const resultDiv = document.getElementById("weatherResult");

    if (city === "") {
        resultDiv.innerHTML = "Please enter a city name.";
        return;
    }

    resultDiv.innerHTML = "Loading weather data...";

    const apiKey = "YOUR_API_KEY";

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        if (data.cod !== 200) {
            resultDiv.innerHTML = "City not found.";
            return;
        }

        resultDiv.innerHTML = `
            <h3>${data.name}</h3>
            <p>🌡 Temperature: ${data.main.temp}°C</p>
            <p>☁ Condition: ${data.weather[0].main}</p>
            <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
        `;

    } catch (error) {
        resultDiv.innerHTML = "Error fetching weather data.";
        console.log(error);
    }
}