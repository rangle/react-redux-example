import React from 'react';
import classNames from 'classnames';

const FormError = ({ children, isVisible, style = {}, className = '', ...props}) => {
  const visibleClass = isVisible ? 'block' : 'hide';

  return (
    <div
      className={ `${ className } bold ${ visibleClass } black` }
      style={{ ...styles.base, ...style }} {...props}>
      { children }
    </div>
  );
};

FormError.propTypes = {
  children: React.PropTypes.node,
  isVisible: React.PropTypes.bool,
};

export default FormError;
