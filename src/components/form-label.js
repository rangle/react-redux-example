import React from 'react';

const FormLabel = ({ children, style = {}, ...props }) => (
  <label style={{ ...styles.base, ...style }} {...props}>
    { children }
  </label>
);

FormLabel.propTypes = {
  children: React.PropTypes.node,
  style: React.PropTypes.object,
  id: React.PropTypes.string,
};

const styles = {
  base: {},
};

export default FormLabel;
