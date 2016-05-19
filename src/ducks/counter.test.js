import assert from 'assert';
import fireAction from '../utils/fire-action';
import counterReducer from './counter';
import * as CounterConstants from './counter';
import * as CounterActions from './counter';
import { LOGOUT_USER } from './session';
import { Map } from 'immutable';

let state = counterReducer(undefined, {});

describe('counter action creators', () => {
  describe('increment', () => {
    assert.deepEqual(CounterActions.increment(), {
      type: CounterConstants.INCREMENT_COUNTER,
    });
  });

  describe('decrement', () => {
    assert.deepEqual(CounterActions.decrement(), {
      type: CounterConstants.DECREMENT_COUNTER,
    });
  });
});

describe('counter reducer', () => {
  describe('inital state', () => {
    it('should be a Map', () => {
      assert.strictEqual(Map.isMap(state), true);
    });
  });

  describe('on INCREMENT_COUNTER', () => {
    it('should increment state.count', () => {
      const previousValue = state.get('count');
      state = fireAction(counterReducer, state, CounterConstants.INCREMENT_COUNTER);
      assert.strictEqual(state.get('count'), previousValue + 1);
    });
  });

  describe('on DECREMENT_COUNTER', () => {
    it('should decrement state.count', () => {
      const previousValue = state.get('count');
      state = fireAction(counterReducer, state, CounterConstants.DECREMENT_COUNTER);
      assert.strictEqual(state.get('count'), previousValue - 1);
    });
  });

  describe('on LOGOUT_USER', () => {
    it('should reset state', () => {
      state = fireAction(counterReducer, state, LOGOUT_USER);
      assert(state.get('count') === 0);
    });
  });
});
