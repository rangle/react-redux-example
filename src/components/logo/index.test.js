import React from 'react';

import { render } from 'enzyme';

import Logo from './index';

describe('Logo', () => {
  it('should render the logo image', () => {
    const wrapper = render(<Logo />);
    const imgElement = wrapper.find('[data-ref="logo-image"]');

    expect(imgElement.length).toBe(1);
  });
});
