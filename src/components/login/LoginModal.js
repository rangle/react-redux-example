import React from 'react';

import Modal from '../ui/Modal';
import ModalContent from '../ui/ModalContent';
import LoginForm from '../login/LoginForm';

const LoginModal = ({ isVisible, isPending, hasError, onSubmit }) => {
  return (
    <Modal isVisible={ isVisible }>
      <ModalContent style={ styles.base }>
        <h1 className="mr2 ml2">Login</h1>

        <LoginForm
          isPending={ isPending }
          hasError={ hasError }
          onSubmit={ onSubmit } />
      </ModalContent>
    </Modal>
  );
};

const styles = {
  base: {
  },
};

export default LoginModal;
