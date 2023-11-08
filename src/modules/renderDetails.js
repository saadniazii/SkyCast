export const renderDetails = (response) => {
  const getLocationSpan = document.querySelector(".current-location-span");
  const getCurrentTempSpan = document.querySelector(
    ".current-temperature-span"
  );
  const getCurrentFeelsLikeSpan = document.querySelector(
    ".current-feels-like-span"
  );

  const getWindSpan = document.querySelector(".current-wind-span");
  const getHumiditySpan = document.querySelector(".current-humidity-span");

  getLocationSpan.textContent = response.current.condition.text;
  getCurrentTempSpan.textContent = `${response.location.name}, ${response.location.country}`;
  getCurrentFeelsLikeSpan.textContent = response.current.temp_c;
  getWindSpan.textContent = `${response.current.wind_kph} KPH`;
  getHumiditySpan.textContent = `${response.current.humidity}%`;
};