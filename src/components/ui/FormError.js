import React from 'react';

const FormError = ({ children, isVisible, style = {}, className = ''}) => {
  const visibleClass = isVisible ? 'block' : 'hide';

  return (
    <div
      className={ `${ className } bold ${ visibleClass } black` }
      style={{ ...styles.base, ...style }}>
      { children }
    </div>
  );
};

const styles = {
  base: {},
};

export default FormError;
