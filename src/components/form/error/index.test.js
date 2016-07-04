import React from 'react';

import { render, shallow } from 'enzyme';

import Error from './index';

describe('Error', () => {
  it('should create a error', () => {
    const wrapper = render(
      <Error isVisible>Hello world</Error>
    );

    expect(wrapper.children().length).toBe(1);
    expect(wrapper.text()).toBe('Hello world');
    expect(wrapper.find('.hide').length).toBe(0);
  });

  it('should allow for custom attributes', () => {
    const wrapper = shallow(<Error data-foo="bar" />);

    expect(wrapper.find('[data-foo="bar"]').length).toBe(1);
  });

  it('should be hidden by default', () => {
    const wrapper = shallow(<Error />);

    expect(wrapper.find('.hide').length).toBe(1);
  });

  it('should be hidden if isVisible is false', () => {
    const wrapper = shallow(<Error isVisible={false} />);

    expect(wrapper.find('.hide').length).toBe(1);
  });
});

