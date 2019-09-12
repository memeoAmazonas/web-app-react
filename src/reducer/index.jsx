import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import user from './user';

const logger = createLogger();

const reducer = combineReducers({
  user,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, promise, logger),
);

export default store;

