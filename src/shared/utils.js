/* eslint-disable */

export const toQueryString = params => {
  Object.keys(params)
    .map(key => `${key}=${encodeURI(params[key])}`)
    .join('&');
  }