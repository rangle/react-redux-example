import isPromise from './isPromise';
import assert from 'assert';

describe('isPromise', () => {
  it('should return true if a Promise is provided', () => {
    const promise = new Promise((resolve) => resolve(true));

    const payload = {
      promise,
    };

    assert(isPromise(payload));
  });

  it('should return false if something that is not a Promise is provided', () => {
    const badPayload1 = { hello: 'world' };
    const badPayload2 = ['hello', 'world'];
    const badPayload3 = 'hello world';
    const badPayload4 = 'hello world';

    assert(!isPromise({ promise: badPayload1 }));
    assert(!isPromise({ promise: badPayload2 }));
    assert(!isPromise({ promise: badPayload3 }));
    assert(!isPromise({ promise: badPayload4 }));
  });
});
