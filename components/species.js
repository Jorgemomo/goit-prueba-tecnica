import { getSpecies } from "../assets/service/serviceAPI.js";

export const specie = `<h1 class='title'>SPECIES</H1>`;

const modalWindow = document.getElementById("modal");
const btnClose = document.querySelector(".close__modal");

export function species() {
  let content = document.getElementById("root");
  getSpecies().then((species) => {
    const markup = species
      .map((specie) => {
        return `        
        <h2 class="elemActive">${specie.name}</h2>        
     `;
      })
      .join("");
    //console.log(markup);
    content.insertAdjacentHTML("beforeend", markup);

    const elementActive = document.querySelectorAll(".elemActive");

    elementActive.forEach((elem) => {
      elem.addEventListener("click", () => {
        modalWindow.showModal();
      });
    });

    btnClose.addEventListener("click", () => {
      modalWindow.close();
    });
  });
}

// async function getSpecies() {
//   const url = "https://swapi.dev/api/species/";
//   return await fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       return data.results;
//     })
//     .catch((error) => console.error(error));
// }
// function displaySpecies(species) {
//   const content = document.getElementById("root");
//   species.forEach((specie) => {
//     const specieName = document.createElement("h2");
//     specieName.classList.add("specie");
//     specieName.innerText = specie.name;
//     content.appendChild(specieName);
//   });
// }
// export async function Species() {
//   const species = await getSpecies();
//   displaySpecies(species);
// }
