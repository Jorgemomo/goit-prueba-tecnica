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

export function getCharacterDetails(characterId) {
  const url = `https://swapi.dev/api/people/${characterId}/`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
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

export function getFilmDetails(filmId) {
  const url = `https://swapi.dev/api/films/${filmId}/`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
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

export function getStarshipDetails(starshipId) {
  const url = `https://swapi.dev/api/starships/${starshipId}/`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
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

export function getVehicleDetails(vehicleId) {
  const url = `https://swapi.dev/api/vehicles/${vehicleId}/`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
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

export function getSpecieDetails(specieId) {
  const url = `https://swapi.dev/api/species/${specieId}/`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
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

export function getPlanetDetails(planetId) {
  const url = `https://swapi.dev/api/planets/${planetId}/`;
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));
}
