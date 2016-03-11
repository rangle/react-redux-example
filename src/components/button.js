import React from 'react';
import classNames from 'classnames';

const Button = ({
  children,
  className = '',
  style = {},
  ...props,
  type = 'button',
  onClick,
}) => (
  <button
    type={ type }
    className={ `btn btn-primary ${ className }` }
    style={{ ...styles.base, ...style }} {...props}
        onClick={ onClick }>
    { children }
  </button>
);

  return (
    <button
      type={ type }
      className={ buttonClasses }
      onClick={ onClick }>
      { children }
    </button>
  );
};

Button.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string,
  type: React.PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: React.PropTypes.func,
  id: React.PropTypes.string,
};

Button.defaultProps = {
  className: '',
  type: 'button',
};

export default Button;
