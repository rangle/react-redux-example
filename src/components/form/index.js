import React from 'react';

function Form({ children, handleSubmit }) {
  return (
    <form
      onSubmit={(e) => {
        console.log('sdfsdf');
        e.preventDefault();
        if (document.activeElement) {
          document.activeElement.blur();
        }
        handleSubmit();
      }}>
      { children }
    </form>
  );
}

Form.propTypes = {
  children: React.PropTypes.node,
  handleSubmit: React.PropTypes.func,
};

export default Form;
