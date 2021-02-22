require("dotenv").config();

//MY API KEY
const apiKey = process.env.REACT_APP_API_KEY;

//NORMAL API
const regularApi = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

//TMDB SEARCH API URL
const searchApi = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=`;

export { regularApi, apiKey, searchApi };
