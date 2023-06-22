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
      return (content.innerHTML = character + characters());

    case "#/films":
      return (content.innerHTML = film + films());

    case "#/starships":
      return (content.innerHTML = starship + starships());

    case "#/vehicles":
      return (content.innerHTML = vehicle + vehicles());

    case "#/species":
      return (content.innerHTML = specie + species());

    case "#/planets":
      return (content.innerHTML = planet + planets());

    default:
      return (content.innerHTML = `<img class='img__error' src='../assets/images/img-404.png' alt='404'>`);
  }
};

window.addEventListener("hashchange", router);
