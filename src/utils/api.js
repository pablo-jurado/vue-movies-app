const API_KEY = process.env.VUE_APP_API_KEY;
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export async function get(endPoint) {
  const response = await fetch(endPoint);
  const data = await response.json();
  return data;
}

export function searchMovies(searchValue, pageNumber) {
  const api = `${API_URL}&s=${searchValue}&page=${pageNumber}`;
  return get(api);
}

export function getMovieById(id) {
  const api = `${API_URL}&i=${id}`;
  return get(api);
}
