import { assert } from 'chai';
import React from 'react';
import { shallow, render } from 'enzyme';
import Counter from './index';

describe('counter', () => {
  it('should create a counter', () => {
    const wrapper = render(<Counter counter={5} />);

    assert.isOk(wrapper.children().length,
      'Counter not found');
    assert.strictEqual(wrapper.find('[data-ref="result"]').text(), '5',
      'Counter not showing its value');
  });

  it('should respond to click events', () => {
    const onIncrement = sinon.spy();
    const onDecrement = sinon.spy();
    const wrapper = shallow(
      <Counter increment={onIncrement} decrement={onDecrement} />
    );

    wrapper.find('[data-ref="incrementButton"]').simulate('click');
    assert.isTrue(onIncrement.calledOnce, 'increment not called');

    wrapper.find('[data-ref="decrementButton"]').simulate('click');
    assert.isTrue(onIncrement.calledOnce, 'decrement not called');
  });
});
