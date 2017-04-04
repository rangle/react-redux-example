import React from 'react';

function Navigator({ children, ...props }) {
  return (
    <nav data-testid={ props.testid } className="flex items-center p1 bg-white border-bottom">
      { children }
    </nav>
  );
}

Navigator.propTypes = {
  children: React.PropTypes.node,
  testid: React.PropTypes.string
};

export default Navigator;
