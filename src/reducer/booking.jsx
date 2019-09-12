import { BOOKING, BOOKING_FAIL, BOOKING_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  booking: {},
  loading: false,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BOOKING:
      return { ...state, error: '', loading: true };
    case BOOKING_FAIL:
      return { ...state, error: action.payload, loading: false };
    case BOOKING_SUCCESS:
      return {
        ...state, error: '', loading: false, booking: action.payload,
      };
    default:
      return state;
  }
};
