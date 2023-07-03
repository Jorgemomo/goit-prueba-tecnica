import {
  getCharacters,
  getCharacterDetails,
} from "../assets/service/serviceAPI.js";

export const character = `<h1 class='title'>CHARACTERS</H1>`;

const modalWindow = document.getElementById("modal");
const btnClose = document.querySelector(".close__modal");
const modalContent = document.querySelector(".modal__container");
const loader = document.getElementById("load");

export function characters() {
  let content = document.getElementById("root");
  getCharacters().then((characters) => {
    const markup = characters
      .map((character) => {
        return `        
        <h2 id='${character.url}' class="elemActive">${character.name}</h2>        
     `;
      })
      .join("");
    //console.log(markup);
    content.insertAdjacentHTML("beforeend", markup);

    const elementActive = document.querySelectorAll(".elemActive");

    elementActive.forEach((elem) => {
      elem.addEventListener("click", () => {
        modalWindow.showModal();

        const getCharacterId = elem.getAttribute("id");
        let characterId = getCharacterId.slice(-3);
        //console.log(characterId);

        getCharacterDetails(characterId)
          .then((character) => {
            const details = `
              <h2>${character.name}</h2>
              <h3>Details</h3>
              <ul>
                 <li>Height: ${character.height}</li>
                 <li>Mass: ${character.mass}</li>
                 <li>Hair color: ${character.hair_color}</li>
                 <li>Skin color: ${character.skin_color}</li>
                 <li>Eye color: ${character.eye_color}</li>tt
                 <li>Birth year: ${character.birth_year}</li>
                 <li>Gender: ${character.gender}</li>
                 <li>Homeland: ${character.homeworld}</li>
                 <li>Films: ${character.films}</li>
                 <li>Specie: ${character.species[0]}</li>     
                 <li>Vehicles: ${character.vehicles}</li>
                 <li>Starships: ${character.starships}</li>                  
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

