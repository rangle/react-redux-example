import React, { PropTypes } from 'react';

import Button from '../ui/Button';

/**
 * A React component that displays the current counter value, and
 * allows the value to be incremented and decremented.
 *
 * Example usage:
 *
 * ```
 * renderExample() {
 *   return (
 *     <Counter
 *       counter={ counter }
 *       increment={ increaseCounter }
 *       decrement={ decreaseCounter } />
 *   );
 * }
 * ```
 */

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

Counter.displayName = 'Counter';
Counter.propTypes = {
  /**
   * The current counter value.
   */
  counter: PropTypes.number.isRequired,
  /**
   * Function to increment the counter value.
   */
  increment: PropTypes.func.isRequired,
  /**
   * Function to decrement the counter value.
   */
  decrement: PropTypes.func.isRequired,
};

const styles = {
  squareButton: {
    width: 48,
    height: 48,
  },
};

export default Counter;
