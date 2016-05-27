import React from 'react';
import classNames from 'classnames';

function FormError({ children, isVisible, testid = 'form-error', ...props}) {
  const formErrorClasses = classNames('bold', 'black', { 'hide': !isVisible });

  return (
    <div data-testid={testid} className={ formErrorClasses } {...props}>
      { children }
    </div>
  );
}

FormError.propTypes = {
  children: React.PropTypes.node,
  isVisible: React.PropTypes.bool,
  testid: React.PropTypes.string,
};

export default FormError;
