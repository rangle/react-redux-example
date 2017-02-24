import React from 'react';
import classNames from 'classnames';

const statusClasses = {
  info: 'bg-blue white',
  warning: 'bg-yellow black',
  success: 'bg-green black',
  error: 'bg-red white',
};

function Alert({
  children,
  isVisible,
  status = 'info',
  testid = 'alert-dialog',
  ...props
}) {
  const alertClasses = classNames(['p2', 'bold'], {
    block: isVisible,
    hide: !isVisible,
    [statusClasses[status]]: true,
  });

  return (
    <div
      data-testid={ testid }
      className={ alertClasses }
      { ...props }>
      { children }
    </div>
  );
}

Alert.propTypes = {
  children: React.PropTypes.node,
  isVisible: React.PropTypes.bool,
  status: React.PropTypes.oneOf(['info', 'warning', 'success', 'error']),
  testid: React.PropTypes.string,
};

export default Alert;
