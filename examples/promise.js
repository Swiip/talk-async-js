import { promiseRequest } from './request-api';
import { oAuthOptions, searchOptions } from './twitter';

promiseRequest(oAuthOptions()).then(response => {
  const token = JSON.parse(response).access_token;
  return promiseRequest(searchOptions(token));
}).then(response => {
  const search = JSON.parse(response);
  search.statuses.forEach(status => console.log(status.text));
});
