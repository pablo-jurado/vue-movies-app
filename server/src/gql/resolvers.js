const { books } = require("../db");

const resolvers = {
  Query: {
    books: () => books,
  },
};

exports.resolvers = resolvers;
