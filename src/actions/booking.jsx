import _ from 'lodash';
import request from 'superagent';

import strings from '../components/strings';
import { BOOKING, BOOKING_FAIL, BOOKING_SUCCESS } from './types';
import { appTuten, urlTuten, adminemail, email } from '../utils/constant';

const setDate = (data) => {
  const currentDate = new Date(data);
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  return `${month + 1}/${date}/${year}`;
};

const filterData = (data) => {
  const result = [];
  data.forEach((i) => {
    let aux = i.parentBooking;
    let tutenUSer = i.locationId.tutenUser;
    result.push({
      bookingId: i.bookingId,
      bookingTime: setDate(i.bookingTime),
      bookingPrice: i.bookingPrice,
      streetAddress: i.locationId.streetAddress,
      name: `${tutenUSer.firstName} ${tutenUSer.lastName}`,
    });
    while (aux !== null) {
      if (_.keys(aux).includes('parentBooking')) {
        tutenUSer = aux.locationId.tutenUser;
        result.push({
          bookingId: aux.bookingId,
          bookingTime: setDate(aux.bookingTime),
          bookingPrice: aux.bookingPrice,
          streetAddress: aux.locationId.streetAddress,
          name: `${tutenUSer.firstName} ${tutenUSer.lastName}`,
        });
        aux = aux.parentBooking;
      } else {
        tutenUSer = aux.locationId.tutenUser;
        result.push({
          bookingId: aux.bookingId,
          bookingTime: setDate(aux.bookingTime),
          bookingPrice: aux.bookingPrice,
          streetAddress: aux.locationId.streetAddress,
          name: `${tutenUSer.firstName} ${tutenUSer.lastName}`,
        });
        aux = null;
      }
    }
  });

  return result.sort();
};
const booking = token => (dispatch) => {
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
        payload: filterData(response.body),
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
