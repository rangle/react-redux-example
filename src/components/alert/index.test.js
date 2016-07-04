import React from 'react';

import { render } from 'enzyme';

import Alert from './index';

describe('Alert', () => {
  it('should create an alert', () => {
    const wrapper = render(<Alert>Success!</Alert>);

    expect(wrapper.children().length).toBeGreaterThan(0);
    expect(wrapper.text()).toBe('Success!');
  });

  it('should have a custom attribute', () => {
    const wrapper = render(<Alert data-some-attr="some text">Success!</Alert>);

    expect(wrapper.find('[data-some-attr]').length).toBe(1);
  });

  it('should have a custom css class', () => {
    const wrapper = render(<Alert className="bg-green">Success!</Alert>);

    expect(wrapper.find('.bg-green').length).toBe(1);
  });

  it('should have an error background', () => {
    const wrapper = render(<Alert status="error">Failed!</Alert>);

    expect(wrapper.find('.bg-red').length).toBe(1);
  });
});
