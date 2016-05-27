import React from 'react';
import classNames from 'classnames';

function Container({ children, size = 1, center, ...props }) {
  const containerClasses = classNames('clearfix', 'px1', {
    'max-width-1': size === 1,
    'max-width-2': size === 2,
    'max-width-3': size === 3,
    'max-width-4': size === 4,
    'mx-auto': center,
  });

  return (
    <div data-testid={props.testid} className={ containerClasses }>
      { children }
    </div>
  );
}

Container.propTypes = {
  children: React.PropTypes.node,
  size: React.PropTypes.oneOf([1, 2, 3, 4]),
  center: React.PropTypes.bool,
  testid: React.PropTypes.string,
};

export default Container;
