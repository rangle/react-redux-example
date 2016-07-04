import React from 'react';

import { render } from 'enzyme';

import Navigator from './index';

describe('Navigator', () => {
  it('should render a <nav> and its children', () => {
    const wrapper = render(<Navigator>Hello world</Navigator>);
    const navElement = wrapper.find('nav');

    expect(navElement.length).toBe(1);
    expect(navElement.text()).toBe('Hello world');
  });
});

