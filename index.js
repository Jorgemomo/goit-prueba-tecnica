import { character, characters } from "./components/character.js";
import { film, films } from "./components/films.js";
import { starship, starships } from "./components/starships.js";
import { vehicles, vehicle } from "./components/vehicles.js";
import { species, specie } from "./components/species.js";
import { planets, planet } from "./components/planets.js";

// getPlanets().then((planets) => {
//   planets.map((planet) => {
//     console.log(planet.name);
//   });
// });

const router = () => {
  const hash = window.location.hash;

  let content = document.getElementById("root");
  content.innerHTML = "";

  switch (hash) {
    case "#/":
      return (content.innerHTML = "");

    case "#/characters":
      characters();
      return (content.innerHTML = character);

    case "#/films":
      films();
      return (content.innerHTML = film);

    case "#/starships":
      starships();
      return (content.innerHTML = starship);

    case "#/vehicles":
      vehicles();
      return (content.innerHTML = vehicle);

    case "#/species":
      species();
      return (content.innerHTML = specie);

    case "#/planets":
      planets();
      return (content.innerHTML = planet);

    default:
      return (content.innerHTML = `<img class='img__error' src='../assets/images/img-404.png' alt='404'>`);
  }
};

window.addEventListener("hashchange", router);
