import React from 'react';

function FormGroup({ children, testid, ...props}) {
  return (
    <div data-testid={testid} className="py2" {...props}>
      {children}
    </div>
  );
}

FormGroup.propTypes = {
  children: React.PropTypes.node,
  testid: React.PropTypes.string,
};

export default FormGroup;
