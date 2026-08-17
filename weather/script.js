const input = document.querySelector("#cityInput");
const searchbtn = document.querySelector("#searchBtn");
const error = document.querySelector("#error");
const city = document.querySelector("#city");
const weatherIcon = document.querySelector(".weatherIcon");
const temperature = document.querySelector("#temperature");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const rain = document.querySelector("#rain");

let latitude;
let longitude;
searchbtn.addEventListener("click", function () {
  city.innerText = input.value;
  fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${input.value}&count=1&language=en&format=json`,
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      latitude = data.results[0].latitude;
      longitude = data.results[0].longitude;

      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m`,
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          humidity.innerText = data.current.relative_humidity_2m;
          wind.innerText = data.current.wind_speed_10m;
          rain.innerText = data.current.precipitation;
          temperature.innerText = `${data.current.temperature_2m}°C`;
        })
        .catch((e) => {
          error.innerText = e;
        });
    })
    .catch((e) => {
      error.innerText = e;
    });
});
