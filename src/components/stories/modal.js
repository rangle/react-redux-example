import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Info from './info';
import Button from '../button';
import { Modal, ModalContent } from '../modal';

storiesOf('Modal', module)
  .add('visible', () => (
    <div className="p4 center">
      <Modal isVisible>
        <ModalContent>
          <h1 className="mt0">Visible Modal</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </ModalContent>
      </Modal>
    </div>
  ))
  .add('hidden', () => (
    <div className="p4 center">
      <Modal isVisible={false}>
        <ModalContent>
          <h1 className="mt0">Hidden Modal</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </ModalContent>
      </Modal>

      <Info>The modal should be hidden</Info>
    </div>
  ))
  .add('with actions', () => (
    <div className="p4 center">
      <Modal isVisible>
        <ModalContent>
          <h1 className="mt0">Modal with actions</h1>
          <Button onClick={ action('action from within the modal') }>Submit</Button>
        </ModalContent>
      </Modal>
    </div>
  ));
