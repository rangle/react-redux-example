import { COUNTER, SESSION } from '../constants';
import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  count: 0,
});

function counterReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case COUNTER.INCREMENT:
      return state.update('count', (value) => value + 1);

    case COUNTER.DECREMENT:
      return state.update('count', (value) => value - 1);

    case SESSION.LOGOUT:
      return state.merge(INITIAL_STATE);

    default:
      return state;
  }
}

export default counterReducer;
