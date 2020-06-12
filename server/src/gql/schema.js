const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Movie {
    Title: String
    Year: String
    Rated: String
    Released: String
    Runtime: String
    Genre: String
    Director: String
    Writer: String
    Actors: String
    Plot: String
    Language: String
    Country: String
    Awards: String
    Poster: String
    Ratings: String
    Metascore: String
    imdbRating: String
    imdbVotes: String
    imdbID: String
    Type: String
    DVD: String
    BoxOffice: String
    Production: String
    Website: String
    Response: String
  }

  type Query {
    movieById(id: ID!): Movie
    searchMovies(value: String!, page: Int): [Movie]
  }
`;

exports.typeDefs = typeDefs;
