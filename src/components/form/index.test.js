import React from 'react';

import { render, shallow } from 'enzyme';

import Form from './index';

describe('Form', () => {
  it('should create a form', () => {
    const wrapper = render(<Form>Hello world</Form>);

    expect(wrapper.children().length).toBe(1);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.text()).toBe('Hello world');
  });

  it('should respond to submit events', () => {
    const onSubmit = jasmine.createSpy('onSubmit');
    const wrapper = shallow(<Form handleSubmit={onSubmit} />);
    const eventStub = { preventDefault: () => {} };
    wrapper.find('form').simulate('submit', eventStub);

    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit.calls.count()).toBe(1);
  });

  // NOTE(cbond): This test is wild unsafe ... it attempts to monkey-patch
  // window.document(!) and then does not restore it afterward, raising the
  // possibility that all subsequent tests will be invalid. Someone needs
  // to review and fix this.
  //
  // it('should blur the currently focused element on submit', () => {
  //   const onBlur = sinon.spy();
  //   global.document = { activeElement: { blur: onBlur } };
  //   const wrapper = shallow(
  //     <Form handleSubmit={() => {}} />
  //   );
  //   const eventStub = { preventDefault: () => {} };
  //   wrapper.find('form').simulate('submit', eventStub);
  //   assert.isTrue(onBlur.calledOnce, 'focused element was not blurred');
  // });
});
