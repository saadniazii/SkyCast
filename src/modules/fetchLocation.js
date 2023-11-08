import { renderDetails } from "./renderDetails";

export const fetchAPI = async () => {
  const location = document.querySelector("#location").value;

  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=7e8dd149578b4420bff102321230811&q=${location}`
  );

  response
    .json()
    .then(function (response) {
      renderDetails(response);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};
