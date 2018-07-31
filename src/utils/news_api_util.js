import { key } from './api-key';

export const fetchNews = () => {
  let body = JSON.stringify({'query': 'tech'});
  let opts = {
    method: 'POST',
    cache: 'no-cache',
  credentials: 'same-origin',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + key
    },
    body
  };
  
  return fetch(
    'https://publist.ai/api/v2/jobs.frontend',
    opts
  );
}

