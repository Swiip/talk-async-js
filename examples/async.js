import { promiseRequest } from './request-api';
import { oAuthOptions, searchOptions } from './twitter';

async function start() {
  const oAuthResponse = await promiseRequest(oAuthOptions());
  const token = JSON.parse(oAuthResponse).access_token;
  const searchResponse = await promiseRequest(searchOptions(token));
  const search = JSON.parse(searchResponse);
  search.statuses.forEach(status => console.log(status.text));
}

start();
