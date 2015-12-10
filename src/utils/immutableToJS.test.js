import immutableToJS from './immutableToJS';
import assert from 'assert';
import { fromJS } from 'immutable';

describe('immutableToJS', () => {
  const mockState = {
    state: {
      name: 'John',
      sons: [{
        name: 'Lill John',
        age: 12,
      }, {
        name: 'Big John',
        age: 34,
      }],
    },
  };

  const stateWithImmutable = {
    state: fromJS(mockState.state),
  };

  it('should ignore regular JS structures', () => {
    assert.deepEqual(mockState, immutableToJS(mockState));
  });

  it('should convert Immutable structures to JS structures', () => {
    assert.deepEqual(mockState, immutableToJS(stateWithImmutable));
  });
});
