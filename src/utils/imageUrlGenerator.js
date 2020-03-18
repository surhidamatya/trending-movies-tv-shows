import {projectConfiguration} from '../projectConfiguration';

export function imageUrlGenerator(path) {
  const url = `${projectConfiguration.imageURL}/${path}`;
  return url
}
