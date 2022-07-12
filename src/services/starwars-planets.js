import api from "./api";

const starwarsPlanets = (homeworld = null) => {
    let url = (homeworld != null ? homeworld : 'https://swapi.dev/api/planets/?page=1');
    return api({ path: url, payload: null, method: "GET" });
}

export default starwarsPlanets;
