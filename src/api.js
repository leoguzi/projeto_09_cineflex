import axios from "axios";
const URL =
  "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies";

export const getMovies = () => axios.get(URL);

export const getSessions = (idMovie) =>
  axios.get(URL + "/" + idMovie + "/showtimes");
