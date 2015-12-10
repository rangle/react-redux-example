import { assert } from 'chai';
import jsdom from 'jsdom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Input from '../../../src/components/ui/Input';

describe('Input', () => {
  beforeEach(() => {
    global.document = jsdom.jsdom();
    global.window = document.defaultView;
  });

  // Ensure an <input> tag exists
  it('should create an input', () => {
    // Render the Input component
    const props = {
      type: 'password',
      placeholder: 'sample placeholder',
    };
    const component = TestUtils.renderIntoDocument(
      <div id="root">
        <Input { ...props } />
      </div>
    );
    assert.isDefined(component, 'Unable to render component');

    // Find the input
    const inputElement = component.querySelector('input');
    assert.isDefined(inputElement, 'Unable to render input');

    // Validate the props were set
    assert.isNotNull(
      inputElement.attributes.getNamedItem('type'),
      'type-attribute not found'
    );
    assert.strictEqual(
      inputElement.attributes.getNamedItem('type').value,
      props.type,
      'type-attribute has incorrect value'
    );
    assert.isNotNull(
      inputElement.attributes.getNamedItem('placeholder'),
      'placeholder-attribute not found'
    );
    assert.strictEqual(
      inputElement.attributes.getNamedItem('placeholder').value,
      props.placeholder,
      'placeholder-attribute has incorrect value'
    );
  });
});
