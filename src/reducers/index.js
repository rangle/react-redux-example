import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import counter from './counter';
import session from './session';
import request from './request';

const rootReducer = combineReducers({
  session,
  counter,
  request,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
