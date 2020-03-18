import http from '../utils/http';
import { projectConfiguration } from '../projectConfiguration';

export async function getTrendingItems(mediaType, timeWindow) {
	const url = `${projectConfiguration.trendingUrl}/${mediaType}/${timeWindow}?api_key=${projectConfiguration.token}`;
	const response = await http.get(url);

	return response;
}

export async function getGenres() {
  const url = `${projectConfiguration.genreUrl}?api_key=${projectConfiguration.token}`;
  const response = await http.get(url);

  return response;
}

export async function getTmdbIds(tmdbId, mediaType) {
  const url = `${projectConfiguration.apiURL}/${mediaType}/${tmdbId}/external_ids?api_key=${projectConfiguration.token}`;
  const response = await http.get(url);

  return response;
}
