import request from 'superagent';

import strings from '../components/strings';
import { appTuten, urlTuten } from '../utils/constant';
import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from './types';

const login = (email, password, callback) => (dispatch) => {
  dispatch({
    type: LOGIN,
  });
  request
    .put(urlTuten.concat(email))
    .set({ Accept: 'application/json' })
    .set({ password })
    .set({ app: appTuten })
    .then((response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.body.sessionTokenBck,
      });
      callback();
    })
    .catch(() => {
      dispatch({
        type: LOGIN_FAIL,
        payload: strings.errors.loginFail,
      });
    });
};

export default login;
