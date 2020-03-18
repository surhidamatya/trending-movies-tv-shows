import axios from 'axios';

import { projectConfiguration } from '../projectConfiguration';

const http = axios.create({
  baseURL: projectConfiguration.apiURL,
  headers: {
    'Content-Type': 'application/json'
  }
});

/**
 * HTTP call interceptor.
 */
http.interceptors.request.use(config => {
  const accessToken = projectConfiguration.token;

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export default http;
