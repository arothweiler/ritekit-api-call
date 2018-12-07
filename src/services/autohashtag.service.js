import axios from 'axios';
import { toQueryString } from '../shared/utils';

const client_id = process.env.CLIENT_ID; // eslint-disable-line
const apiUrl = 'https://api.ritekit.com/v1/stats/auto-hashtag';

function generate(post, maxHashtags, hashtagPosition) {
  let url = 'https://any-cors.herokuapp.com/'; // to enable CORS
  url += `${apiUrl}?${toQueryString({ post, maxHashtags, hashtagPosition, client_id })}`;
  return axios.get(url);
}

export default { generate };
