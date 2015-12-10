import React from 'react';

const Input = (props) => {
  const {
    type = 'text',
    style = {},
    placeholder = '',
    fieldDefinition,
  } = props;

  return (
    <input
      className="block col-12 mb1 field"
      style={{ ...styles.base, ...style }}
      type={ type }
      placeholder={ placeholder }
      { ...fieldDefinition } />
  );
};

const styles = {
  base: {},
};

export default Input;
