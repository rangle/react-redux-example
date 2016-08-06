import { SESSION } from '../constants';
import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  token: null,
  user: {},
  hasError: false,
  isLoading: false,
});

function sessionReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SESSION.LOGIN_SUCCESS:
      return state.merge(fromJS({
        token: action.payload.token,
        user: action.payload.profile,
        hasError: false,
        isLoading: false,
      }));

    case SESSION.LOGOUT:
      return state.merge(INITIAL_STATE);

    default:
      return state;
  }
}

export default sessionReducer;
