import React from 'react';

/**
 * A React component that represents a Navigator Item.
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

const NavigatorItem = ({ children, isVisible, className = '' }) => {
  const visibleClass = isVisible ? 'block' : 'hide';

  return (
    <div
      className={ `${ visibleClass } ${ className }` }
      style={ styles.base }>
      { children }
    </div>
  );
};

const styles = {
  base: {},
};

NavigatorItem.displayName = 'NavigatorItem';

NavigatorItem.propTypes = {
  /**
   * Content of NavigatorItem
   */
  children: PropTypes.array.isRequired,
  /**
   * visibility flag
   */
  isVisible: PropTypes.array.isRequired,
  /**
   * Class information for component
   */
  className: PropTypes.array.isRequired,
};

NavigatorItem.defaultProps = {
  isVisible: true,
};


export default NavigatorItem;
