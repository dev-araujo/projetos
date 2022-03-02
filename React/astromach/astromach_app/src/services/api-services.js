import axios from "axios";
import { BASE_URL } from "./BASE_URL";

export const getIsMatch = (setState, state) => {
  axios
    .get(`${BASE_URL}person`)
    .then((response) => {
      setState(response.data.profile);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const postMatch = (data) => {
  axios.post(`${BASE_URL}choose-person`, data).catch((error) => {
    console.log(error);
  });
};

export const getGaveMatch = (setState) => {
  axios
    .get(`${BASE_URL}matches`)
    .then((response) => {
      setState(response.data.matches);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteMatches = () => {
  axios
    .put(`${BASE_URL}clear`)
    .then(() => {
      alert("Curtidos apagados, segue a fila!");
      window.location.reload(false);
    })
    .catch((error) => {
      console.log(error);
    });
};
