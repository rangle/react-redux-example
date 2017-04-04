import React from 'react';

import { Modal, ModalContent } from '../modal';
import LoginForm from './login-form';

function LoginModal({ isVisible, isPending, hasError, onSubmit }) {
  return (
    <Modal testid="login-form" isVisible={ isVisible }>
      <ModalContent>
        <h1 data-testid="login-header" className="mt0">Login</h1>

        <LoginForm
          isPending={ isPending }
          hasError={ hasError }
          onSubmit={ onSubmit } />
      </ModalContent>
    </Modal>
  );
}

LoginModal.propTypes = {
  isVisible: React.PropTypes.bool,
  isPending: React.PropTypes.bool,
  hasError: React.PropTypes.bool,
  onSubmit: React.PropTypes.func
};

export default LoginModal;
