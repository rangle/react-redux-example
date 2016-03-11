import React from 'react';

const FormGroup = ({ children, style = {}, className = '', ...props}) => (
  <div className={ `p2 ${ className }` } style={{ ...styles.base, ...style }} {...props}>
    { children }
  </div>
);

FormGroup.propTypes = {
  children: React.PropTypes.node,
};

export default FormGroup;
