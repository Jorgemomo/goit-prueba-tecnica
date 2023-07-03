import { getSpecies, getSpecieDetails } from "../assets/service/serviceAPI.js";

export const specie = `<h1 class='title'>SPECIES</H1>`;

const modalWindow = document.getElementById("modal");
const btnClose = document.querySelector(".close__modal");
const modalContent = document.querySelector(".modal__container");
const loader = document.getElementById("load");

export function species() {
  let content = document.getElementById("root");
  getSpecies().then((species) => {
    const markup = species
      .map((specie) => {
        return `        
        <h2 id='${specie.url}' class="elemActive">${specie.name}</h2>        
     `;
      })
      .join("");
    //console.log(markup);
    content.insertAdjacentHTML("beforeend", markup);

    const elementActive = document.querySelectorAll(".elemActive");

    elementActive.forEach((elem) => {
      elem.addEventListener("click", () => {
        modalWindow.showModal();

        const getSpecietId = elem.getAttribute("id");
        let specieId = getSpecietId.slice(-3);

        getSpecieDetails(specieId)
          .then((specie) => {
            const details = `
              <h2>${specie.name}</h2>
              <h3>Details</h3>
              <ul>
                 <li>Classification: ${specie.classification}</li>
                 <li>Language: ${specie.language}</li>
                 <li>Designation: ${specie.designation}</li>
                 <li>Average height: ${specie.average_height}</li>
                 <li>Average lifespan: ${specie.average_lifespan}</li>
                 <li>Eye colors: ${specie.eye_colors}</li>
                 <li>Skin colors: ${specie.skin_colors}</li>
                 <li>Homeworld: ${specie.homeworld}}</li>       
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

