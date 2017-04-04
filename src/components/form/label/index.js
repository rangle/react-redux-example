import React from 'react';

function FormLabel({ children }) {
  return (
    <label>
      { children }
    </label>
  );
}

FormLabel.propTypes = {
  children: React.PropTypes.node
};

export default FormLabel;
