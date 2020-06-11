const axios = require("axios");
const { API_URL } = require("../config");

const movieResolver = async (_, args) => {
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

const resolvers = {
  Query: {
    movie: movieResolver,
  },
};

exports.resolvers = resolvers;
