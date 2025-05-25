document.getElementById('weather-current').innerHTML = `
  <p><strong>Accra</strong></p>
  <p>☀️ Sunny</p>
  <p>Temperature: 29°C</p>
`;

document.getElementById('weather-forecast').innerHTML = `
  <div class="forecast-day">
    <p><strong>Tomorrow</strong></p>
    <p>⛅ Partly Cloudy</p>
    <p>Temp: 28°C</p>
  </div>
  <div class="forecast-day">
    <p><strong>Day After</strong></p>
    <p>🌧️ Rain</p>
    <p>Temp: 26°C</p>
  </div>
  <div class="forecast-day">
    <p><strong>In 3 Days</strong></p>
    <p>☀️ Sunny</p>
    <p>Temp: 30°C</p>
  </div>
`;