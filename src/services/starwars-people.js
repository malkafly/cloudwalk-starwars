import api from "./api";

const starwarsPeoples = (nextPage = null) => {
    let url = (nextPage != null ? nextPage : 'https://swapi.dev/api/people/?page=1');
    return api({ path: url, payload: null, method: "GET" });
}

export default starwarsPeoples;
