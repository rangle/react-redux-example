import { assert } from 'chai';
import React from 'react';
import { shallow, render } from 'enzyme';
import sinon from 'sinon';
import Button from './index';

describe('button', () => {
  it('should create a button', () => {
    const wrapper = render(<Button>OK</Button>);
    const button = wrapper.find('button');

    assert.strictEqual(button.length, 1,
      'button not found');
    assert.strictEqual(button.text(), 'OK',
      'child contents not found');
    assert.strictEqual(button.attr('type'), 'button',
      'default type is not "button"');
  });

  it('should have a custom attribute', () => {
    const wrapper = render(
      <Button data-some-attr="some text">OK</Button>
    );
    const button = wrapper.find('button');

    assert.strictEqual(button.attr('data-some-attr'), 'some text',
      'custom attributes not getting inserted');
  });

  it('should have a custom css class', () => {
    const wrapper = render(
      <Button className="bg-green">OK</Button>
    );
    const button = wrapper.find('button');

    assert.isTrue(button.hasClass('bg-green'));
  });

  it('should create a submit button', () => {
    const wrapper = render(<Button type="submit">Submit</Button>);
    const button = wrapper.find('button');

    assert.strictEqual(button.attr('type'), 'submit');
  });

  it('should respond to click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(
      <Button onClick={onButtonClick} />
    );
    wrapper.simulate('click');
    assert.isTrue(onButtonClick.calledOnce);
  });
});
