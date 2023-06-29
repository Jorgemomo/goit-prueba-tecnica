import { getFilms, getFilmDetails } from "../assets/service/serviceAPI.js";

export const film = `<h1 class='title'>FILMS</H1>`;

const modalWindow = document.getElementById("modal");
const btnClose = document.querySelector(".close__modal");
const modalContent = document.querySelector(".modal__container");
const loader = document.getElementById("load");

export function films() {
  let content = document.getElementById("root");
  getFilms().then((films) => {
    const markup = films
      .map((film) => {
        return `        
        <h2 id='${film.url}' class="elemActive">${film.title}</h2>        
     `;
      })
      .join("");
    //console.log(markup);
    content.insertAdjacentHTML("beforeend", markup);

    const elementActive = document.querySelectorAll(".elemActive");

    elementActive.forEach((elem) => {
      elem.addEventListener("click", () => {
        modalWindow.showModal();

        const getFilmId = elem.getAttribute("id");
        let filmId = getFilmId.slice(-3);

        getFilmDetails(filmId)
          .then((film) => {
            const details = `
              <h2>${film.title}</h2>
              <h3>Details</h3>
              <ul>
                 <li>Opening crawl: ${film.opening_crawl}</li>
                 <li>Director: ${film.director}</li>
                 <li>Release date: ${film.release_date}</li>
                 <li>Producer: ${film.producer}</li>       
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
