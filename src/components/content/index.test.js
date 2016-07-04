import React from 'react';

import { render } from 'enzyme';

import Content from './index';

describe('Content', () => {
  it('should render html inside a <main> tag', () => {
    const wrapper = render(
      <Content isVisible>Hello world</Content>
    );
    const mainElement = wrapper.find('main');

    expect(mainElement.length).toBe(1);
    expect(mainElement.text()).toBe('Hello world');
  });

  it('should not render content if set to not visible', () => {
    const wrapper = render(
      <Content isVisible={false}>
        Hello world
      </Content>);

    const mainElement = wrapper.find('main');

    expect(mainElement.text()).toBe('');
  });
});

