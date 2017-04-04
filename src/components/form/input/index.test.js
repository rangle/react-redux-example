import React from 'react';

import { render } from 'enzyme';

import Input from './index';

describe('Input', () => {
  it('should create an input', () => {
    const props = {
      placeholder: 'sample placeholder'
    };

    const wrapper = render(
      <div id="root">
        <Input { ...props } />
      </div>
    );
    expect(wrapper.children().length).toBe(1);

    // Find the input
    const inputElement = wrapper.find('input');
    expect(inputElement.length).toBe(1);

    // Validate the props were set
    expect(inputElement.attr('type')).not.toBeNull();
    expect(inputElement.attr('type')).toBe('text');
    expect(inputElement.attr('placeholder')).not.toBeNull();
    expect(inputElement.attr('placeholder')).toBe(props.placeholder);
  });

  it('should create a password field', () => {
    const wrapper = render(
      <div id="root">
        <Input type="password" />
      </div>
    );
    const inputElement = wrapper.find('input');

    expect(inputElement.attr('type')).toBe('password');
  });
});
