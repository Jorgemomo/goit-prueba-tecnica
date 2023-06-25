import { getFilms } from "../assets/service/serviceAPI.js";

export const film = `<h1 class='title'>FILMS</H1>`;

const modalWindow = document.getElementById("modal");
const btnClose = document.querySelector(".close__modal");

export function films() {
  let content = document.getElementById("root");
  getFilms().then((films) => {
    const markup = films
      .map((film) => {
        return `        
        <h2 class="elemActive">${film.title}</h2>        
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

// function getFilms() {
//   const url = "https://swapi.dev/api/films/";
//   return fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       return data.results;
//     })
//     .catch((error) => console.error(error));
// }
// function displayFilms(films) {
//   const content = document.getElementById("root");
//   films.forEach((film) => {
//     const filmName = document.createElement("h2");
//     filmName.classList.add("film");
//     filmName.innerText = film.title;
//     content.appendChild(filmName);
//   });
// }
// export async function Films() {
//   const films = await getFilms();
//   displayFilms(films);
// }
