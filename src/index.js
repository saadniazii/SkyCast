import { fetchAPI } from "./modules/fetchLocation";
import { renderDetails } from "./modules/renderDetails";
import "./style.css";
const getLocationBtn = document.querySelector(".getLocationBtn");

getLocationBtn.addEventListener("click", fetchAPI);

window.addEventListener("load", async () => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=7e8dd149578b4420bff102321230811&q=London`
  );

  response
    .json()
    .then(function (response) {
      renderDetails(response);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});
