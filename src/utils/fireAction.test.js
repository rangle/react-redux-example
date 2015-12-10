import fireAction from './fireAction';
import assert from 'assert';

describe('fireAction', () => {
  const INITIAL_STATE = {
    test: false,
  };

  const mockReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case 'test':
      state.test = true;
      return state;

    default:
      return state;
    }
  };

  it('it should fire the provided action against the provided reducer', () => {
    const state = fireAction(mockReducer, INITIAL_STATE, 'test');
    assert(state.test);
  });
});
