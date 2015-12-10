import React from 'react';

const FormLabel = ({ children, style = {} }) => {
  return (
    <label style={{ ...styles.base, ...style }}>
      { children }
    </label>
  );
};

const styles = {
  base: {},
};

export default FormLabel;
