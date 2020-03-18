import { getTmdbIds } from "../services/services";
import * as constant from "../utils/constants";

export async function findImdbId(id, media_type) {
  const externalId = await getTmdbIds(id, media_type);
  const imdbId = externalId.data.imdb_id;
  
  return imdbId;
}

export async function getImdbUrl(tmdbid, mediaType) {
  const imdbId = await findImdbId(tmdbid,mediaType);
  const url = constant.TBDB_TITLE +imdbId;
  
  return url;
}

export function youtubeSearchQueryGenerator(mediaName) {
	return `https://www.youtube.com/results?search_query=${mediaName.replace(
		/ /g,
		'+'
	)}+720p+trailer`;
}