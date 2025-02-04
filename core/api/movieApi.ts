import axios from "axios";

const movieApi = axios.create({
  //cada vez que usemos la instancia de axios tendrá este inicio de url
  baseURL: process.env.EXPO_PUBLIC_MOVIE_DB_URL,
  params: {
    api_key: process.env.EXPO_PUBLIC_MOVIE_DB_KEY,
    language: 'es-MX',
  },
});

export default movieApi;
