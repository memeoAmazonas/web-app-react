import request from 'superagent';
import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from './types';
import { appTuten, urlTuten } from '../utils/config';
import strings from '../components/strings';

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
      callback();
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.body.sessionTokenBck,
      });
    })
    .catch(() => {
      dispatch({
        type: LOGIN_FAIL,
        payload: strings.errors.loginFail,
      });
    });
};

export default login;
