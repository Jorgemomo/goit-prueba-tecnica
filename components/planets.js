import { getPlanets, getPlanetDetails } from "../assets/service/serviceAPI.js";

export const planet = `<h1 class='title'>PLANETS</h1>`;

const modalWindow = document.getElementById("modal");
const btnClose = document.querySelector(".close__modal");
const modalContent = document.querySelector(".modal__container");
const loader = document.getElementById("load");

export function planets() {
  let content = document.getElementById("root");

  getPlanets().then((planets) => {
    const markup = planets
      .map((planet) => {
        return `        
        <h2 id='${planet.url}' class="elemActive">${planet.name}</h2>       
        `;
      })
      .join("");
    //console.log(markup);
    content.insertAdjacentHTML("beforeend", markup);

    const elementActive = document.querySelectorAll(".elemActive");

    elementActive.forEach((elem) => {
      elem.addEventListener("click", () => {
        modalWindow.showModal();

        const getPlanetId = elem.getAttribute("id");
        let planetId = getPlanetId.slice(-3);

        getPlanetDetails(planetId)
          .then((planet) => {
            const details = `
              <h2>${planet.name}</h2>
              <h3>Details</h3>
              <ul>
                 <li>Diameter: ${planet.diameter}</li>
                 <li>Rotation period: ${planet.rotation_period}</li>
                 <li>Orbital period: ${planet.orbital_period}</li>
                 <li>Gravity: ${planet.gravity}</li>
                 <li>Population: ${planet.population}</li>
                 <li>Climate: ${planet.climate}</li>
                 <li>Terrain: ${planet.terrain}</li>
                 <li>Surface: ${planet.surface_water}</li>
                 <li>Residents: ${planet.residents}</li>
                 <li>films appear: ${planet.films}</li>        
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

// export async function getPlanets() {
//   const url = "https://swapi.dev/api/planets/";
//   return await fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       return data.results;
//     })
//     .catch((error) => console.error(error));
// }
// function displayPlanets(planets) {
//   const content = document.getElementById("root");
//   planets.forEach((planet) => {
//     const planetName = document.createElement("h2");
//     planetName.classList.add("planet");
//     planetName.innerText = planet.name;
//     content.appendChild(planetName);
//   });
// }
// export async function Planets() {
//   const planets = await getPlanets();
//   displayPlanets(planets);
// }

///forma alternativa de mi codigo en la parte superior

// const planetTitle = `<h1 class='title'>PLANETS</h1>`;
// function createPlanetElement(planet) {
//   const planetElement = document.createElement("h2");
//   planetElement.classList.add("planet");
//   planetElement.textContent = planet.name;
//   return planetElement;
// }
// async function renderPlanets() {
//   const rootElement = document.getElementById("root");
//   rootElement.innerHTML = ""; // Limpiar el contenido anterior
//   rootElement.insertAdjacentHTML("beforeend", planetTitle);
//   try {
//     const planets = await getPlanets();
//     const planetElements = planets.map(createPlanetElement);
//     planetElements.forEach((planetElement) =>
//       rootElement.appendChild(planetElement)
//     );
//   } catch (error) {
//     rootElement.textContent = "Error al cargar los planetas";
//     console.error(error);
//   }
// }
