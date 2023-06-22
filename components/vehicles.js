import { getVehicles } from "../assets/service/serviceAPI.js";

export const vehicle = `<h1 class='title'>VEHICLES</H1>`;

export function vehicles() {
  let content = document.getElementById("root");
  getVehicles().then((vehicles) => {
    const markup = vehicles
      .map((vehicle) => {
        return `        
        <h2 class="vehicle">${vehicle.name}</h2>        
     `;
      })
      .join("");
    //console.log(markup);
    content.insertAdjacentHTML("beforeend", markup);
  });
}

// async function getVehicles() {
//   const url = "https://swapi.dev/api/vehicles/";
//   return await fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       return data.results;
//     })
//     .catch((error) => console.error(error));
// }
// function displayVehicles(vehicles) {
//   const content = document.getElementById("root");
//   vehicles.forEach((vehicle) => {
//     const vehicleName = document.createElement("h2");
//     vehicleName.classList.add("vehicle");
//     vehicleName.innerText = vehicle.name;
//     content.appendChild(vehicleName);
//   });
// }
// export async function Vehicles() {
//   const vehicles = await getVehicles();
//   displayVehicles(vehicles);
// }
