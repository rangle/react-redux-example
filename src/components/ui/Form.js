import React from 'react';

const Form = ({ children, style = {}, handleSubmit }) => {
  return (
    <form
      style={{ ...styles.base, ...style }}
      onSubmit={(e) => {
        e.preventDefault();
        document.activeElement.blur();
        handleSubmit();
      }}>
      { children }
    </form>
  );
};

const styles = {
  base: {},
};

export default Form;
