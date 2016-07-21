import * as Redux from 'redux';
import * as I from 'immutable';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';
import promiseMiddleware from '../middleware/promise-middleware';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import logger from './logger';
import rootReducer from '../reducers';
import transit from 'transit-immutable-js';

function configureStore(initialState) {
  const createStore = Redux.compose(...getEnhancers())(Redux.createStore);
  const store = createStore(rootReducer, initialState);

  enableHotReload(store);
  return store;
}

function getEnhancers() {
  const enhancers = [
    Redux.applyMiddleware(...getMiddleware()),
    persistState('session', getReduxLocalStorageConfig()),
  ];

  if (__DEV__ && window.devToolsExtension) {
    return [...enhancers, window.devToolsExtension() ];
  }

  return enhancers;
}

function getMiddleware() {
  const middleware = [
    routerMiddleware(browserHistory),
    promiseMiddleware,
    thunk,
  ];

  if (__DEV__) {
    return [...middleware, logger];
  }

  return middleware;
}

function enableHotReload(store) {
  if (__DEV__ && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
}

function getReduxLocalStorageConfig() {
  return {
    key: 'react-redux-seed',
    serialize: (store) => {
      return transit.toJSON(
        store && store.session ? store.session : I.Map(),
      );
    },
    deserialize: (serialized) => ({
      session: serialized ? transit.fromJSON(serialized) : I.Map(),
    }),
  };
}

export default configureStore;
