import assert from 'assert';
import fireAction from '../../src/utils/fireAction';
import counterReducer from '../../src/reducers/counter';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../../src/constants/index';
import { Map } from 'immutable';

let state = counterReducer(undefined, {});

describe('counter reducer', () => {
  describe('inital state', () => {
    it('should be a Map', () => {
      assert.strictEqual(Map.isMap(state), true);
    });
  });

  describe('on INCREMENT_COUNTER', () => {
    it('should increment state.count', () => {
      const previousValue = state.get('count');
      state = fireAction(counterReducer, state, INCREMENT_COUNTER);
      assert.strictEqual(previousValue + 1, state.get('count'));
    });
  });

  describe('on DECREMENT_COUNTER', () => {
    it('should decrement state.count', () => {
      const previousValue = state.get('count');
      state = fireAction(counterReducer, state, DECREMENT_COUNTER);
      assert.strictEqual(previousValue - 1, state.get('count'));
    });
  });
});
