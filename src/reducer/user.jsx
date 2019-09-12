import {
  LOGIN,
  EMAIL,
  PASSWORD,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  error: '',
  token: '',
  email: '',
  password: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL:
      return { ...state, email: action.payload };
    case PASSWORD:
      return { ...state, password: action.payload };
    case LOGIN:
      return { ...state, error: '', loading: true };
    case LOGIN_FAIL:
      return {
        ...state, loading: false, token: '', error: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state, loading: false, token: action.payload, error: '',
      };
    default:
      return state;
  }
};
