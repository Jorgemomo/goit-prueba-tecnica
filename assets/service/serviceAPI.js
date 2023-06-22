export function getCharacters() {
  const url = "https://swapi.dev/api/people/";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data.results);
      return data.results;
    })
    .catch((error) => console.error(error));
}

export function getFilms() {
  const url = "https://swapi.dev/api/films/";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    })
    .catch((error) => console.error(error));
}

export function getStarships() {
  const url = "https://swapi.dev/api/starships/";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    })
    .catch((error) => console.error(error));
}

export function getVehicles() {
  const url = "https://swapi.dev/api/vehicles/";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    })
    .catch((error) => console.error(error));
}

export function getSpecies() {
  const url = "https://swapi.dev/api/species/";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    })
    .catch((error) => console.error(error));
}

export function getPlanets() {
  const url = "https://swapi.dev/api/planets/";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    })
    .catch((error) => console.error(error));
}
