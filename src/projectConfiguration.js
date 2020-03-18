const trendingUrl = '/trending';
const genres = '/genre/movie/list';

export const projectConfiguration = {
  apiURL : process.env.REACT_APP_API_URL,
  imageURL : process.env.REACT_APP_IMG_URL,
  token : process.env.REACT_APP_API_TOKEN,
  trendingUrl: process.env.REACT_APP_API_URL + trendingUrl,
  genreUrl : process.env.REACT_APP_API_URL + genres
}