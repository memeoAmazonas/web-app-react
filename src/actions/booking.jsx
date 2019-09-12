import request from 'superagent';
import { BOOKING, BOOKING_FAIL, BOOKING_SUCCESS } from './types';
import { appTuten, urlTuten, adminemail, email } from '../utils/config';
import strings from '../components/strings';

const booking = (token) => (dispatch) => {
  dispatch({
    type: BOOKING,
  });
  request
    .get(urlTuten.concat(`${email}/bookings?current=${true}`))
    .set({ Accept: 'application/json' })
    .set({ token })
    .set({ app: appTuten })
    .set({ adminemail })
    .then((response) => {
      dispatch({
        type: BOOKING_SUCCESS,
        payload: response.body,
      });
    })
    .catch(() => {
      dispatch({
        type: BOOKING_FAIL,
        payload: strings.errors.loginFail,
      });
    });
};

export default booking;
