import { TIMEZONE, UTC_FAIL, UTC_SUCCESS, HOUR } from '../actions/types';

const INITIAL_STATE = {
  hour: '',
  timezone: '',
  utc: {},
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HOUR:
      return { ...state, hour: action.payload };
    case TIMEZONE:
      return { ...state, timezone: action.payload };
    case UTC_FAIL:
      return { ...state, error: action.payload };
    case UTC_SUCCESS:
      return { ...state, utc: action.payload };

    default:
      return state;
  }
};
