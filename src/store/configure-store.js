import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';
import promiseMiddleware from '../middleware/promise-middleware';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import logger from './logger';
import rootReducer from '../reducers';
import transit from 'transit-immutable-js';

function configureStore(initialState) {
  const store = compose(
    _getMiddleware(),
    ..._getEnhancers()
  )(createStore)(rootReducer, initialState);

  _enableHotLoader(store);
  return store;
}

function _getMiddleware() {
  let middleware = [
    routerMiddleware(browserHistory),
    promiseMiddleware,
    thunk,
  ];

  if (__DEV__) {
    middleware = [...middleware, logger];
  }

  return applyMiddleware(...middleware);
}

function _getEnhancers() {
  let enhancers = [
    persistState('session', _getStorageConfig()),
  ];

  if (__DEV__ && window.devToolsExtension) {
    enhancers = [...enhancers, window.devToolsExtension() ];
  }

  return enhancers;
}

function _enableHotLoader(store) {
  if (__DEV__ && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
}

function _getStorageConfig() {
  return {
    key: 'react-redux-seed',
    serialize: (store) => {
      return store && store.session
        ? transit.toJSON(store.session)
        : store;
    },
    deserialize: (str) => ({
      session: str ? transit.fromJSON(str) : fromJS({}),
    }),
  };
}

export default configureStore;
