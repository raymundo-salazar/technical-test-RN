import axios from "axios";

const movieDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "75305da19db045916e0f7f4296f1e781",
    languaje: "es-ES",
  },
});

export default movieDB;
