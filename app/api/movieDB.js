import axios from "axios";

const movieDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "75305da19db045916e0f7f4296f1e781",
    languaje: "es-ES",
  },
});

//Lo intente pero ya no tenia tiempo

// const movieDB = async (service) => {
//   const apiKey = "75305da19db045916e0f7f4296f1e781";
//   const language = "es-ES";

//   const url =
//     "https://api.themoviedb.org/3/movie" + service + "?language=" + language;
//   const headers = {
//     Authorization: apiKey,
//     // accept: "application/json",
//   };

//   try {
//     const response = await fetch(url, {
//       headers: headers,
//     });

//     if (!response.ok) {
//       throw new Error("not ok");
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };

export default movieDB;
