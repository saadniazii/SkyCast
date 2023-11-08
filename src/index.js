import { fetchAPI } from "./modules/fetchLocation";
import "./style.css";
const getLocationBtn = document.querySelector(".getLocationBtn");

getLocationBtn.addEventListener("click", fetchAPI);

// fetchAPI();

// weather: response.current.condition.text
// city, country name: response.location.name, response.location.country
// response in Celsius response.current.temp_c
// response in F response.current.temp_f
// feels like in C: response.current.feelslike_c
// feels like in F: response.current.feelslike_f
// wind in kph: response.current.wind_kph
// wind in mph: response.current.wind_mph
// humidity: response.current.humidity
