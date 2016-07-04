import React from 'react';

import { shallow, render } from 'enzyme';

import Counter from './index';

describe('counter', () => {
  it('should create a counter', () => {
    const wrapper = render(<Counter counter={5} />);

    expect(wrapper.children().length).toBe(1);
    expect(wrapper.find('[data-ref="result"]').text()).toBe('5');
  });

  it('should respond to click events', () => {
    const onIncrement = jasmine.createSpy('onIncrement');
    const onDecrement = jasmine.createSpy('onDecrement');

    const wrapper = shallow(
      <Counter increment={onIncrement} decrement={onDecrement} />
    );

    wrapper.find('[data-ref="incrementButton"]').simulate('click');

    expect(onIncrement).toHaveBeenCalled();
    expect(onIncrement.calls.count()).toBe(1);

    wrapper.find('[data-ref="decrementButton"]').simulate('click');
    expect(onIncrement).toHaveBeenCalled();
    expect(onIncrement.calls.count()).toBe(1);
  });
});

