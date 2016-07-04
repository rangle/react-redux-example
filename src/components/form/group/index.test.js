import React from 'react';

import { render, shallow } from 'enzyme';

import Group from './index';

describe('Group', () => {
  it('should create a group', () => {
    const wrapper = render(<Group>Hello world</Group>);

    expect(wrapper.children().length).toBe(1);
    expect(wrapper.text()).toBe('Hello world');
  });

  it('should allow for custom attributes', () => {
    const wrapper = shallow(<Group data-foo="bar" />);

    expect(wrapper.find('[data-foo="bar"]').length).toBe(1);
  });
});

