import {
  getVehicles,
  getVehicleDetails,
} from "../assets/service/serviceAPI.js";

export const vehicle = `<h1 class='title'>VEHICLES</H1>`;

const modalWindow = document.getElementById("modal");
const btnClose = document.querySelector(".close__modal");
const modalContent = document.querySelector(".modal__container");
const loader = document.getElementById("load");

export function vehicles() {
  let content = document.getElementById("root");
  getVehicles().then((vehicles) => {
    const markup = vehicles
      .map((vehicle) => {
        return `        
        <h2 id='${vehicle.url}' class="elemActive">${vehicle.name}</h2>        
     `;
      })
      .join("");
    //console.log(markup);
    content.insertAdjacentHTML("beforeend", markup);

    const elementActive = document.querySelectorAll(".elemActive");

    elementActive.forEach((elem) => {
      elem.addEventListener("click", () => {
        modalWindow.showModal();

        const getVehicleId = elem.getAttribute("id");
        let vehicleId = getVehicleId.slice(-3);

        getVehicleDetails(vehicleId)
          .then((vehicle) => {
            const details = `
              <h2>${vehicle.name}</h2>
              <h3>Details</h3>
              <ul>
                <li>Modelo: ${vehicle.model}</li>
                <li>Length: ${vehicle.length}</li>
                <li>Amount passenger: ${vehicle.passengers}</li>
                <li>Capacity: ${vehicle.cargo_capacity}</li>
                <li>Manufacturer: ${vehicle.manufacturer}</li>
                <li>Price: ${vehicle.cost_in_credits}</li>
                <li>Consumables: ${vehicle.consumables}</li>
                <li>Hyperdrive rating: ${vehicle.hyperdrive_rating}</li>
                <li>Class: ${vehicle.vehicle_class}</li>        
              </ul>          
                `;

            modalContent.insertAdjacentHTML("beforeend", details);
            loader.classList.add("loader");
          })
          .catch((error) => console.error(error));
      });
    });

    btnClose.addEventListener("click", () => {
      loader.classList.remove("loader");
      modalContent.textContent = "";
      modalWindow.close();
    });
  });
}
