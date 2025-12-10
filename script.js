async function showWeather() {
    let city = document.getElementById("city").value;
    let apiKey = "ff3de2a420c14b94b0b105213251012";

    let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    // WeatherAPI returns "error" when city not found
    if (response.ok && !data.error) {
        document.getElementById("result").innerHTML = `
            <h2>${data.location.name}, ${data.location.country}</h2>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Condition: ${data.current.condition.text}</p>
        `;
    } else {
        document.getElementById("result").innerHTML = `
            <p>City not found</p>
        `;
    }
}