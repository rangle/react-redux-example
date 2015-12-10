import assert from 'assert';
import jsdom from 'jsdom';

import React from 'react';
import ReactDOM from 'react-dom';

import Modal from '../../../src/components/ui/Modal';

describe('Modal Component', () => {
  beforeEach(() => {
    global.document = jsdom.jsdom();
    global.window = document.defaultView;
  });

  it('should create a modal', () => {
    const props = {
      children: 'hello world',
    };

    const node = document.createElement('div');
    const modal = ReactDOM.render(<div><Modal { ...props } /></div>, node);

    assert(modal.childNodes[0].innerHTML === 'hello world');
  });
});

