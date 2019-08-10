import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Modal = props => {
  const styleWindow = {
    width: props.width,
    height: props.height,
  };

  const handleClose = event => {
    const { target } = event;
    if (target.classList.contains('modal') && !props.isStatic) {
      props.onClose();
    }
  };

  return (
    <div
      className="modal"
      style={{ display: props.show ? 'flex' : 'none'}}
      onClick={handleClose}
    >
      <div className="modal__window" style={styleWindow}>
        <div className="modal__header">
          {props.header}
        </div>
        <div className="modal__body">
          {props.children}
        </div>
        <div className="modal__footer">
          {props.footer}
        </div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  isStatic: PropTypes.bool,
  header: PropTypes.func,
  footer: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
};

Modal.defaultProps = {
  isStatic: false,
  header: () => {},
  footer: () => {},
  width: '',
  height: '',
};
