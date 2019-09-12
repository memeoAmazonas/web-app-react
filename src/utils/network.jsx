import superagent from 'superagent';
import superAgentAbsolute from 'superagent-absolute';
import { urlTuten } from './config';

let urlBase = urlTuten;
if (process.env.NODE_ENV === 'development') {
  alert(urlTuten);
  urlBase = urlTuten;
}
const agent = superagent.agent();
const request = superAgentAbsolute(agent)(urlBase);

export default request;
