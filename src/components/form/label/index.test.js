import React from 'react';

import { render } from 'enzyme';

import Label from './index';

describe('form/label', () => {
  it('should create a formLabel', () => {
    const wrapper = render(<Label>Hello world</Label>);

    expect(wrapper.children().length).toBe(1);
    expect(wrapper.text()).toBe('Hello world');
  });
});

