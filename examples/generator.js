import { promiseRequest } from './request-api';
import { oAuthOptions, searchOptions } from './twitter';

import co from 'co';

co(function *() {
  const oAuthResponse = yield promiseRequest(oAuthOptions());
  const token = JSON.parse(oAuthResponse).access_token;
  const searchResponse = yield promiseRequest(searchOptions(token));
  const search = JSON.parse(searchResponse);
  search.statuses.forEach(status => console.log(status.text));
});
