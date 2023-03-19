import axios from 'axios';
const API_KEY = 'a6e9a41b359e3e0c31a6b9372b7a4849';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function fetchMoviesTrending() {
  const URL = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`;
  const response = await axios.get(URL);
  return response.data.results;
}

export async function fetchMoviesByName(query) {
  const URL = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`;
  const response = await axios.get(URL);
  return response.data.results;
}

export async function fetchMovieById(id) {
  const URL = `${BASE_URL}movie/${id}?api_key=${API_KEY}`;
  const response = await axios.get(URL);
  return response.data;
}
export async function fetchMovieCast(id) {
  const URL = `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`;
  const response = await axios.get(URL);
  return response.data.cast;
}

export async function fetchMovieReviews(id) {
  const URL = `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`;
  const response = await axios.get(URL);
  return response.data.results;
}
// export { fetchMoviesTrending, fetchMoviesByName };
