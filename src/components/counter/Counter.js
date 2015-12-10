import React from 'react';

import Button from '../ui/Button';

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div className="flex">
      <div className="flex-auto flex-center center">
        <Button
          style={ styles.squareButton }
          className="btn btn-primary bg-black"
          onClick={ decrement }>
          -
        </Button>
      </div>

      <div className="flex-auto flex-center center h1">
        { counter }
      </div>

      <div className="flex-auto flex-center center">
        <Button
          style={ styles.squareButton }
          className="btn btn-primary"
          onClick={ increment }>
          +
        </Button>
      </div>
    </div>
  );
};

const styles = {
  squareButton: {
    width: 48,
    height: 48,
  },
};

export default Counter;
