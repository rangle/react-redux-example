import React from 'react';

const componentColor = {
  info: 'bg-blue white',
  warning: 'bg-yellow black',
  success: 'bg-green black',
  error: 'bg-red white',
};

const Alert = ({ children, isVisible, status = 'info', className = '', style = {}}) => {
  const visibleClass = isVisible ? 'block' : 'hide';

  return (
    <div
      className={ `${ className } p2 bold ${ visibleClass } ${ componentColor[status] || 'info' }` }
      style={{ ...styles.base, ...style }}>
      { children }
    </div>
  );
};

const styles = {
  base: {},
};

export default Alert;
