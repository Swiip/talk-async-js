import { key, secret } from './twitter-credentials';

const twitterOAuthUrl = 'https://api.twitter.com/oauth2/token';
const twitterSearchUrl = 'https://api.twitter.com/1.1/search/tweets.json';

function authorization() {
  const authorization = new Buffer(`${encodeURIComponent(key)}:${encodeURIComponent(secret)}`).toString('base64');
  return `Basic ${authorization}`;
}

export function oAuthOptions() {
  return {
    method: 'POST',
    url: twitterOAuthUrl,
    headers: {
      Authorization: authorization(),
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: 'grant_type=client_credentials'
  };
};

export function searchOptions(token) {
  return {
    method: 'GET',
    url: twitterSearchUrl,
    qs: { q: '#es6' },
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
}
