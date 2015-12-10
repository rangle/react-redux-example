import React from 'react';

const Container = ({ children, style = {}, className = '' }) => {
  return (
    <div className={ `container ${ className }` } style={{ ...styles.base, ...style }}>
      <div className="clearfix">
        { children }
      </div>
    </div>
  );
};

const styles = {
  base: {},
};

export default Container;
