import axios from "axios";

const BASE_URL = "https://api.chucknorris.io/jokes/";

export const api_getRandomJokes = (set) => {
  axios
    .get(`${BASE_URL}random`)
    .then((response) => {
      set(response.data.value);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const api_getCategories = (set) => {
  // used in GlobalState
  axios
    .get(`${BASE_URL}categories`)
    .then((response) => {
      set(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const api_getJokesPerCategories = (set, state) => {
  //used in  JokesOptions
  axios
    .get(`${BASE_URL}random?category=${state}`)
    .then((response) => {
      set(response.data.value);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const api_getSearchJokes = (setList, text) => {
  return axios
    .get(`${BASE_URL}search?query=${text}`)
    .then((response) => {
      setList(response.data.result.slice(0, 7));
    })
    .catch((error) => {
      console.log(error);
    });
};
