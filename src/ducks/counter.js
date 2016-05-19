import { fromJS } from 'immutable';
import { LOGOUT_USER } from './session.js';

// constants

export const INCREMENT_COUNTER = 'App/counter/INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'App/counter/DECREMENT_COUNTER';

const INITIAL_STATE = fromJS({
  count: 0,
});

// action creators

export function increment() {
  return {
    type: INCREMENT_COUNTER,
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER,
  };
}

// reducer

function counterReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

  case INCREMENT_COUNTER:
    return state.update('count', (value) => value + 1);

  case DECREMENT_COUNTER:
    return state.update('count', (value) => value - 1);

  case LOGOUT_USER:
    return state.merge(INITIAL_STATE);

  default:
    return state;
  }
}

export default counterReducer;
