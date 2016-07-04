import React from 'react';

import { shallow, render } from 'enzyme';

import Button from './index';

describe('button', () => {
  it('should create a button', () => {
    const wrapper = render(<Button>OK</Button>);
    const button = wrapper.find('button');

    expect(button.length).toBe(1);
    expect(button.text()).toBe('OK');
    expect(button.attr('type')).toBe('button');
  });

  it('should have a custom attribute', () => {
    const wrapper = render(
      <Button data-some-attr="some text">OK</Button>
    );
    const button = wrapper.find('button');

    expect(button.attr('data-some-attr')).toBe('some text');
  });

  it('should have a custom css class', () => {
    const wrapper = render(
      <Button className="bg-green">OK</Button>
    );
    const button = wrapper.find('button');

    expect(button.hasClass('bg-green')).toBe(true);
  });

  it('should create a submit button', () => {
    const wrapper = render(<Button type="submit">Submit</Button>);
    const button = wrapper.find('button');

    expect(button.attr('type')).toBe('submit');
  });

  it('should respond to click events', () => {
    const onButtonClick = jasmine.createSpy('onButtonClick');
    const wrapper = shallow(
      <Button onClick={onButtonClick} />
    );
    wrapper.simulate('click');

    expect(onButtonClick).toHaveBeenCalled();
    expect(onButtonClick.calls.count()).toBe(1);
  });
});
