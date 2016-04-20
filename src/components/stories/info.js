import React from 'react';

const Info = ({ children }) => {
  return (
    <p className="p2 mt2 border rounded"
      style={{
        color: '#8a6d3b',
        backgroundColor: '#fcf8e3',
        borderColor: '#faebcc',
      }}>
      { children }
    </p>
  );
};

Info.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Info;
