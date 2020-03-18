import { getTmdbIds } from "../services/services";

export function concatenate(str, params) {
  let formattedString = str;

  for (const [key, value] of Object.entries(params)) {
    const val = value || '';

    formattedString = formattedString.replace(new RegExp(':' + key, 'gi'), val.toString());
  }

  return formattedString;
}

export async function findImdbId(id, media_type) {
  const externalId = await getTmdbIds(id, media_type);
  const imdbId = externalId.data.imdb_id;
  
  return imdbId;
}

export async function getImdbUrl(tmdbid, mediaType) {
  const imdbId = await findImdbId(tmdbid,mediaType);
  const url = 'https://imdb.com/title/'+imdbId;
  
  return url;
}

export function youtubeSearchQueryGenerator(mediaName) {
	return `https://www.youtube.com/results?search_query=${mediaName.replace(
		/ /g,
		'+'
	)}+720p+trailer`;
}