import React from 'react';
import Button from './button/button';

function Counter({ counter, increment, decrement }) {
  return (
    <div className="flex">
      <Button className="bg-black col-2"
        onClick={ decrement }>
        -
      </Button>

      <div className="flex-auto center h1">
        { counter }
      </div>

      <Button className="col-2"
        onClick={ increment }>
        +
      </Button>
    </div>
  );
}

Counter.propTypes = {
  counter: React.PropTypes.number,
  increment: React.PropTypes.func,
  decrement: React.PropTypes.func,
};

export default Counter;
