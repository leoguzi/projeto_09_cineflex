import axios from "axios";
const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/";

export const getMovies = () => axios.get(URL + "movies");

export const getSessions = (idMovie) =>
  axios.get(URL + "movies/" + idMovie + "/showtimes");

export const getSeats = (sessionID) =>
  axios.get(URL + "showtimes/" + sessionID + "/seats");
