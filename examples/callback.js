import { callbackRequest } from './request-api';
import { oAuthOptions, searchOptions } from './twitter';

callbackRequest(oAuthOptions(), (error, response, body) => {
  const token = JSON.parse(body).access_token;
  callbackRequest(searchOptions(token), (error, response, body) => {
    const search = JSON.parse(body);
    search.statuses.forEach(status => console.log(status.text));
  });
});
