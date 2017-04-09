import React from 'react';
import classNames from 'classnames';
import { modal } from './modal.css';

function ModalContent({ children }) {
  const classDef = classNames('p2', 'z2', 'bg-white', 'relative', modal);

  return (
    <div className={ classDef }>
      { children }
    </div>
  );
}

ModalContent.propTypes = {
  children: React.PropTypes.node
};

export default ModalContent;
