import { syncRequest } from './request-api';
import { oAuthOptions, searchOptions } from './twitter';

const oAuthResponse = syncRequest(oAuthOptions());
const token = JSON.parse(oAuthResponse.body).access_token;

const searchResponse = syncRequest(searchOptions(token));

const search = JSON.parse(searchResponse.body);
search.statuses.forEach(status => console.log(status.text));
