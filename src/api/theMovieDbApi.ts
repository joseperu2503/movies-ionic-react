import axios from 'axios';

const apiUrl = process.env.THE_MOVIE_DB_API_URL
const token = process.env.THE_MOVIE_DB_TOKEN

const mdbApi = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-type': 'application/json',
  },
});

mdbApi.interceptors.request.use((config) => {
  // Agregar el token como un query parameter en todas las solicitudes
  config.params = { ...config.params, api_key: token, language: 'en-US' };
  return config;
});

export { mdbApi };
