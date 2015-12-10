import React from 'react';

const Modal = ({ isVisible, children, style = {} }) => {
  const visibleStyle = isVisible ? styles.visible : styles.hidden;

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 p1"
      style={{ ...styles.base, ...visibleStyle, ...style }}>
      { children }
    </div>
  );
};

const styles = {
  base: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    transition: 'visibility 250ms, opacity 250ms',
  },
  visible: {
    visibility: 'visible',
    opacity: 1,
    zIndex: 999,
  },
  hidden: {
    visibility: 'hidden',
    opacity: 0,
    zIndex: 0,
  },
};

export default Modal;
