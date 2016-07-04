import React from 'react';

import { render, shallow } from 'enzyme';

import NavigatorItem from './index';

describe('NavigatorItem', () => {
  it('should render a NavigationItem and its children', () => {
    const wrapper = render(<NavigatorItem>Hello world</NavigatorItem>);

    expect(wrapper.children().length).toBe(1);
    expect(wrapper.text()).toBe('Hello world');
  });

  it('should be hidden', () => {
    const wrapper = render(<NavigatorItem isVisible={false}>Hello world</NavigatorItem>);

    expect(wrapper.find('.hide').length).toBe(1);
  });

  it('should have left and right margins', () => {
    const wrapper = shallow(
      <NavigatorItem mr ml>
        Hello world
      </NavigatorItem>
    );

    expect(wrapper.find('.mr2')).not.toBeNull();
    expect(wrapper.find('.ml2')).not.toBeNull();
  });
});
