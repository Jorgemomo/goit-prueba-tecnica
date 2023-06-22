import { getCharacters } from "../assets/service/serviceAPI.js";

export const character = `<h1 class='title'>CHARACTERS</H1>`;

export function characters() {
  let content = document.getElementById("root");
  getCharacters().then((characters) => {
    const markup = characters
      .map((character) => {
        return `        
        <h2 class="character">${character.name}</h2>        
     `;
      })
      .join("");
    //console.log(markup);
    content.insertAdjacentHTML("beforeend", markup);
  });
}

// async function getCharacters() {
//   const url = "https://swapi.dev/api/people/";
//   return await fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       //console.log(data.results);
//       return data.results;
//     })
//     .catch((error) => console.error(error));
// }
// function displayCharacters(characters) {
//   const content = document.getElementById("root");
//   characters.forEach((character) => {
//     const characterName = document.createElement("h2");
//     characterName.classList.add("character");
//     characterName.innerText = character.name;
//     content.appendChild(characterName);
//   });
// }
// export async function Characters() {
//   const characters = await getCharacters();
//   displayCharacters(characters);
// }
