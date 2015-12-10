import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { reduxReactRouter } from 'redux-router';
import persistState from 'redux-localstorage';

import history from './history';
import routes from './routes';
import thunk from 'redux-thunk';
import promiseMiddleware from '../middleware/promiseMiddleware';
import logger from './logger';
import rootReducer from '../reducers';

const storageConfig = {
  key: 'react-redux-seed',
  serialize: (store) => {
    return store && store.session ?
      JSON.stringify(store.session.toJS()) : store;
  },
  deserialize: (state) => ({
    session: state ? fromJS(JSON.parse(state)) : fromJS({}),
  }),
};

function configureStore(initialState) {
  const store = compose(
  __DEV__
  ? applyMiddleware(promiseMiddleware, thunk, logger)
  : applyMiddleware(promiseMiddleware, thunk),
    reduxReactRouter({
      routes,
      history,
    }),
    persistState('session', storageConfig)
  )(createStore)(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export default configureStore;
