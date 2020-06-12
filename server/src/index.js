const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./gql/schema");
const { resolvers } = require("./gql/resolvers");
const database = require("../db");

const port = process.env.PORT || 8081;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    db: database,
  }),
});
const app = express();

server.applyMiddleware({ app });

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
  console.log(`graphql on: http://localhost:${port}${server.graphqlPath}`);
});
