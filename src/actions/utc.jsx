import request from 'superagent';
import { urlUtc } from '../utils/constant';
import { UTC_FAIL, UTC_SUCCESS } from './types';
import strings from '../components/strings';

const getUtc = (hour, timezone, callback) => (dispatch) => {
  request
    .post(urlUtc)
    .set('Access-Control-Allow-Origin', '*')
    .accept('application/json')
    .send({ hour, timezone })
    .then((response) => {
      console.log(response);
      dispatch({
        type: UTC_SUCCESS,
        payload: response.body,
      });
      callback();
    })
    .catch(() => {
      dispatch({
        type: UTC_FAIL,
        payload: strings.errors.loginFail,
      });
    });
};
export default getUtc;
