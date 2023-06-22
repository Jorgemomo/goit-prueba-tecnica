import { getStarships } from "../assets/service/serviceAPI.js";

export const starship = `<h1 class='title'>STARSHIPS</H1>`;

export function starships() {
  let content = document.getElementById("root");
  getStarships().then((starships) => {
    const markup = starships
      .map((starship) => {
        return `        
        <h2 class="starship">${starship.name}</h2>        
     `;
      })
      .join("");
    //console.log(markup);
    content.insertAdjacentHTML("beforeend", markup);
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
