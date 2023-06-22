import { getPlanets } from "../assets/service/serviceAPI.js";

export const planet = `<h1 class='title'>PLANETS</h1>`;

export function planets() {
  let content = document.getElementById("root");
  getPlanets().then((planets) => {
    const markup = planets
      .map((planet) => {
        return `        
        <h2 class="planet">${planet.name}</h2>        
     `;
      })
      .join("");
    //console.log(markup);
    content.insertAdjacentHTML("beforeend", markup);
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
