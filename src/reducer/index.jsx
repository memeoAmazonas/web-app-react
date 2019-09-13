import { combineReducers } from 'redux';

import user from './user';
import utc from './utc';
import booking from './booking';

const reducer = combineReducers({
  user,
  utc,
  booking,
});

export default reducer;

