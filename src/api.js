import axios from "axios";
const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/";

export const getMovies = () => axios.get(URL + "movies");

export const getSessions = (idMovie) =>
  axios.get(URL + "movies/" + idMovie + "/showtimes");

export const getSeats = (sessionID) =>
  axios.get(URL + "showtimes/" + sessionID + "/seats");

export const postOrder = (order) => {
  axios
    .post(URL + "seats/book-many", order)
    .catch((error) => console.log(error));
};

export function validCpf(cpf) {
  cpf = cpf.replace(/[^\d]+/g, "");
  if (cpf === "") return false;
  if (
    cpf.length !== 11 ||
    cpf === "00000000000" ||
    cpf === "11111111111" ||
    cpf === "22222222222" ||
    cpf === "33333333333" ||
    cpf === "44444444444" ||
    cpf === "55555555555" ||
    cpf === "66666666666" ||
    cpf === "77777777777" ||
    cpf === "88888888888" ||
    cpf === "99999999999"
  )
    return false;
  let add = 0;
  for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
  let rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(9))) return false;
  add = 0;
  for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(10))) return false;
  return true;
}
