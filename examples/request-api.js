import _syncRequest from 'sync-request';
import request from 'request';
import requestPromise from 'request-promise';

export function syncRequest(options) {
  return _syncRequest(options.method, options.url, options);
}

export function callbackRequest(options, callback) {
  return request(options, callback);
}

export function promiseRequest(options) {
  return requestPromise(options);
}
