const trendingUrl = '/trending';
const genres = '/genre/movie/list?api_key=9626168d181bfa64fe2b0fa44150ce6b';

const REACT_APP_API_URL='https://api.themoviedb.org/3';
const REACT_APP_IMG_URL= 'https://image.tmdb.org/t/p/original';
const REACT_APP_API_TOKEN='9626168d181bfa64fe2b0fa44150ce6b';

export const projectConfiguration = {
  apiURL : REACT_APP_API_URL,
  imageURL : REACT_APP_IMG_URL,
  token : REACT_APP_API_TOKEN,
  trendingUrl: REACT_APP_API_URL + trendingUrl,
  genreUrl : REACT_APP_API_URL + genres
}