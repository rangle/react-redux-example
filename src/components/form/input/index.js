import React from 'react';

function Input({
  type = 'text',
  placeholder = '',
  fieldDefinition,
  id,
}) {
  const {
    value,
    onBlur,
    onChange,
    onFocus,
  } = fieldDefinition;

  return (
    <input
      id={ id }
      className="block col-12 mb1 input"
      type={ type }
      placeholder={ placeholder }
      value={ value }
      onBlur={ onBlur }
      onChange={ onChange }
      onFocus={ onFocus } />
  );
}

Input.propTypes = {
  type: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  fieldDefinition: React.PropTypes.object.isRequired,
  id: React.PropTypes.string,
};

export default Input;
