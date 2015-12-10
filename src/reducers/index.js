import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { reducer as formReducer } from 'redux-form';
import counter from './counter';
import session from './session';

const rootReducer = combineReducers({
  session,
  counter,
  router: routerStateReducer,
  form: formReducer,
});

export default rootReducer;
