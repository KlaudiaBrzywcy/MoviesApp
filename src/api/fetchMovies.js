import axios from "axios";

// TODO extract this do .env file
const key = "a82d2d62";
const URL = `http://www.omdbapi.com/?apikey=${key}`;
export const fetchMovies = (search) => {
  axios.get(`${URL}&s=${search}`);
};
