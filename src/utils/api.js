const API_KEY = process.env.VUE_APP_API_KEY;
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export async function get(endPoint) {
  const response = await fetch(endPoint);
  const data = await response.json();
  return data;
}

export function searchMovies(searchValue) {
  const api = `${API_URL}&s=${searchValue}`;
  return get(api);
}
