import React from 'react';
import classNames from 'classnames';

const statusClasses = {
  info: 'bg-blue white',
  warning: 'bg-yellow black',
  success: 'bg-green black',
  error: 'bg-red white',
};


const Alert = ({ children, isVisible, status = 'info', className = '', ...props, style = {}}) => {
  const visibleClass = isVisible ? 'block' : 'hide';

  return (
    <div
      className={ `${ className } p2 bold ${ visibleClass } ${ componentColor[status] || 'info' }` }
      style={{ ...styles.base, ...style }} {...props}>
      { children }
    </div>
  );
};

Alert.propTypes = {
  children: React.PropTypes.node,
  isVisible: React.PropTypes.bool,
  status: React.PropTypes.oneOf(['info', 'warning', 'success', 'error']),
  className: React.PropTypes.string,
  style: React.PropTypes.object,
  id: React.PropTypes.string,
};

const styles = {
  base: {},
};

export default Alert;
