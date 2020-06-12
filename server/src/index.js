const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./gql/schema");
const { resolvers } = require("./gql/resolvers");

const environment = process.env.NODE_ENV || "development";
const configuration = require("../knexfile")[environment];
const database = require("knex")(configuration);

const port = process.env.PORT || 8081;

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

server.applyMiddleware({ app });

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
  console.log(`graphql on: http://localhost:${port}${server.graphqlPath}`);
});

exports.db = database;
