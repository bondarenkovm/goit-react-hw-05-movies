import axios from 'axios';
const API_KEY = 'a6e9a41b359e3e0c31a6b9372b7a4849';
const BASE_URL = 'https://api.themoviedb.org/3/';

async function fetchMovies() {
  const URL = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`;
  const response = await axios.get(URL);
  return response.data.results;
}
export { fetchMovies };
