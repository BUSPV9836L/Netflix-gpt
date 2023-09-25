const dotenv = require('dotenv');

const result = dotenv.config();

if (result.error) {
  throw result.error;
}

module.exports = {
  REACT_APP_API_KEY: process.env.REACT_APP_OPENAI_KEY,
  REACT_APP_API_URL: process.env.REACT_APP_TMDB_KEY,
};
