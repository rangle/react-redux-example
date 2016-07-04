import { assert } from 'chai';
import React from 'react';
import { render, shallow } from 'enzyme';
import Form from './index';

describe('Form', () => {
  it('should create a form', () => {
    const wrapper = render(
      <Form>Hello world</Form>
    );

    assert.isOk(wrapper.children().length, 'formForm not created');
    assert.isOk(wrapper.find('form').length, 'formForm not created');
    assert.strictEqual(wrapper.text(), 'Hello world',
      'child contents not found');
  });

  it('should respond to submit events', () => {
    const onSubmit = sinon.spy();
    const wrapper = shallow(
      <Form handleSubmit={onSubmit} />
    );
    const eventStub = { preventDefault: () => {} };
    wrapper.find('form').simulate('submit', eventStub);
    assert.isTrue(onSubmit.calledOnce, 'form not submitted');
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
