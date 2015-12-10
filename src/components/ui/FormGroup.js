import React from 'react';

const FormGroup = ({ children, style = {}, className = '' }) => {
  return (
    <div className={ `p2 ${ className }` } style={{ ...styles.base, ...style }}>
      { children }
    </div>
  );
};

const styles = {
  base: {},
};

export default FormGroup;
