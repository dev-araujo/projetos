import axios from "axios";

const BASE_URL = "https://api.chucknorris.io/jokes/";

export const getRandomJokes = (set) => {
  axios
    .get(`${BASE_URL}/random`)
    .then((response) => {
      set(response.data.value);
    })
    .catch((error) => {
      console.log(error);
    });
};
