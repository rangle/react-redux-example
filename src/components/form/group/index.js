import React from 'react';

function FormGroup({ children, ...props}) {
  return (
    <div data-testid={props.testid} className="py2" {...props}>
      { children }
    </div>
  );
}

FormGroup.propTypes = {
  children: React.PropTypes.node,
  testid: React.PropTypes.string,
};

export default FormGroup;
