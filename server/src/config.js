require("dotenv").config();

const API_KEY = process.env.API_KEY;
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const environment = process.env.NODE_ENV || "development";
const configuration = require("../knexfile")[environment];
const database = require("knex")(configuration);

exports.API_URL = API_URL;
exports.db = database;
