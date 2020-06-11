require("dotenv").config();

const API_KEY = process.env.API_KEY;
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

exports.API_URL = API_URL;
