import React from 'react';
import classNames from 'classnames';

function NavigatorItem({
  children,
  isVisible = true,
  mr = false,
  ml = false,
  ...props,
}) {
  const navItemClasses = classNames('truncate', {
    hide: !isVisible,
    mr2: mr,
    ml2: ml,
  });

  return (
    <div data-testid={ props.testid } className={ navItemClasses }>
      { children }
    </div>
  );
}

NavigatorItem.propTypes = {
  children: React.PropTypes.node,
  isVisible: React.PropTypes.bool,
  mr: React.PropTypes.bool,
  ml: React.PropTypes.bool,
  testid: React.PropTypes.string,
};

export default NavigatorItem;
