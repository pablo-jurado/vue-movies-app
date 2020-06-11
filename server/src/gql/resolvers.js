const axios = require("axios");
const { API_URL } = require("../config");

const movieByIdResolver = async (_, args) => {
  const movieId = args.id;
  try {
    const response = await axios.get(API_URL + "&i=" + movieId);
    if (response.data.Response === "True") {
      return response.data;
    } else {
      console.log(response.Error);
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

const searchMoviesResolver = async (_, args) => {
  const searchValue = args.value;
  const page = args.page || 1;
  const api = `${API_URL}&s=${searchValue}&page=${page}`;

  try {
    const response = await axios.get(api);
    console.log(response);
    if (response.data.Response === "True") {
      return response.data.Search;
    } else {
      console.log(response.Error);
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

const resolvers = {
  Query: {
    movieById: movieByIdResolver,
    searchMovies: searchMoviesResolver,
  },
};

exports.resolvers = resolvers;
