import React from 'react';

import { render } from 'enzyme';

import Container from './index';

describe('Container', () => {
  it('should create an container 1 unit wide', () => {
    const wrapper = render(<Container size={1}>Hello world</Container>);

    expect(wrapper.children().length).toBe(1);
    expect(wrapper.text()).toBe('Hello world');
    expect(wrapper.find('.max-width-1').length).toBe(1);
  });

  it('should create a centered container', () => {
    const wrapper = render(<Container center>Success!</Container>);

    expect(wrapper.find('.mx-auto').length).toBe(1);
  });
});
