import createLogger from 'redux-logger';
import immutableToJS from '../utils/immutable-to-js';

export default createLogger({
  collapsed: true,
  logger: console,
  stateTransformer: (state) => {
    return immutableToJS(state);
  },
  predicate: (getState, { type }) => {
    return type !== 'redux-form/BLUR' &&
           type !== 'redux-form/CHANGE' &&
           type !== 'redux-form/FOCUS' &&
           type !== 'redux-form/TOUCH';
  }
});
