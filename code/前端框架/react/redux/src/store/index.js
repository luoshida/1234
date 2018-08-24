import { createStore,applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducer.js';

const middlewares = [ReduxThunk];
if (process.env.NODE_ENV === 'development') {
  const Logger = createLogger();
  middlewares.push(Logger);
}

const store = createStore(reducer,applyMiddleware(...middlewares));

export default store;