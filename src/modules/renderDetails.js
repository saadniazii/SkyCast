export const renderDetails = (response) => {
  const getLocationSpan = document.querySelector(".current-weather-span");
  const getCurrentTempSpan = document.querySelector(
    ".current-temperature-span"
  );
  const getCurrentFeelsLikeSpan = document.querySelector(
    ".current-feels-like-span"
  );

  getLocationSpan.textContent = response.current.condition.text;
  getCurrentTempSpan.textContent = `${response.location.name}, ${response.location.country}`;
  getCurrentFeelsLikeSpan.textContent = response.current.temp_c;
};
