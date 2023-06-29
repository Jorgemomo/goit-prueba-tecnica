import {
  getStarships,
  getStarshipDetails,
} from "../assets/service/serviceAPI.js";

export const starship = `<h1 class='title'>STARSHIPS</H1>`;

const modalWindow = document.getElementById("modal");
const btnClose = document.querySelector(".close__modal");
const modalContent = document.querySelector(".modal__container");
const loader = document.getElementById("load");

export function starships() {
  let content = document.getElementById("root");
  getStarships().then((starships) => {
    const markup = starships
      .map((starship) => {
        return `        
        <h2 id='${starship.url}' class="elemActive">${starship.name}</h2>        
     `;
      })
      .join("");
    //console.log(markup);
    content.insertAdjacentHTML("beforeend", markup);

    const elementActive = document.querySelectorAll(".elemActive");

    elementActive.forEach((elem) => {
      elem.addEventListener("click", () => {
        modalWindow.showModal();

        const getStarshipId = elem.getAttribute("id");
        let starshipId = getStarshipId.slice(-3);

        getStarshipDetails(starshipId)
          .then((starship) => {
            const details = `
              <h2>${starship.name}</h2>
              <h3>Details</h3>
              <ul>
                 <li>Modelo: ${starship.model}</li>
                 <li>Length: ${starship.length}</li>
                 <li>Amount passenger: ${starship.passengers}</li>
                 <li>Capacity: ${starship.cargo_capacity}</li>
                 <li>Manufacturer: ${starship.manufacturer}</li>
                 <li>Price: ${starship.cost_in_credits}</li>
                 <li>Consumables: ${starship.consumables}</li>
                 <li>Hyperdrive rating: ${starship.hyperdrive_rating}</li>
                 <li>Class: ${starship.starship_class}</li>       
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

//async function getStarships() {
//   const url = "https://swapi.dev/api/starships/";
//   return await fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       return data.results;
//     })
//     .catch((error) => console.error(error));
// }
// function displayStarships(starships) {
//   const content = document.getElementById("root");
//   starships.forEach((starship) => {
//     const starshipName = document.createElement("h2");
//     starshipName.classList.add("starship");
//     starshipName.innerText = starship.name;
//     content.appendChild(starshipName);
//   });
// }
// export async function Starships() {
//   const starships = await getStarships();
//   displayStarships(starships);
// }
