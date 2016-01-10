import React, { PropTypes } from 'react';
import Modal from '../ui/Modal';
import ModalContent from '../ui/ModalContent';
import LoginForm from '../login/LoginForm';

/**
 * A React component that displays a modal use to show the login form.
 *
 * Example usage:
 *
 * ```
 * renderExample() {
     render(
       <LoginModal
         onSubmit={ login }
         isPending={ session.get('isLoading', false) }
         hasError={ session.get('hasError', false) }
         isVisible={ !isLoggedIn } />
     );
 * }
 * ```
 */
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

LoginModal.displayName = 'LoginModal';
LoginModal.propTypes = {
  /**
   * If true, show this component
   */
  isVisible: PropTypes.bool.isRequired,
  /**
   * If true, show loading indicator
   */
  isPending: PropTypes.bool.isRequired,
  /**
   * If true, display error state
   */
  hasError: PropTypes.bool.isRequired,
  /**
   * function to handle the login form submit
   */
  onSubmit: PropTypes.func.isRequired,
};


const styles = {
  base: {
  },
};

export default LoginModal;
