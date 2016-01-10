import React, { PropTypes } from 'react';

/**
 * A React component that wraps the NavigatorItem menu.
 *
 * Example usage:
 *
 * ```
 * renderExample() {
 *   return (
 *     <Navigator>
 *       <NavigatorItem>
 *         <Link to="/">Counter</Link>
 *       </NavigatorItem>
 *       <NavigatorItem>
 *         <Link to="/about">About Us</Link>
 *       </NavigatorItem>
 *     </Navigator>
 *   );
 * }
 * ```
 */
const Navigator = ({ children }) => {
  return (
    <div
      className="flex flex-stretch flex-center p1 bg-white black border-bottom fixed top-0 left-0 right-0 z3"
      styles={ styles.base }>
      { children }
    </div>
  );
};

Navigator.displayName = 'Navigator';
Navigator.propTypes = {
  /**
   * Content of Navigator menu
   */
  children: PropTypes.array.isRequired,
};

const styles = {
  base: {
    height: '10rem',
  },
};

export default Navigator;
