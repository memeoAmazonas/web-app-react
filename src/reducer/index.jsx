import { combineReducers } from 'redux';

import user from './user';
import booking from './booking';

const reducer = combineReducers({
  user,
  booking,
});

export default reducer;

