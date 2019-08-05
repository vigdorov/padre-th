import React from 'react';
import PropTypes from 'prop-types';
import Modal from "./modal";

const ModalSendMsg = props => {
  const name = !!props.form.name ? `${props.form.name}, ваше` : 'Ваше';
  const header = (
    <h3>{name} сообщение отправлено</h3>
  );

  const footer = (
    <button
      className="btn-main"
      type="button"
    >
      OK
    </button>
  );

  return (
    <Modal
      header={header}
      footer={footer}
      show={props.show}
      onClose={props.onClose}
    >
      <p className="center-text">
        Хочу внимания
      </p>
    </Modal>
  )
};

export default ModalSendMsg;

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  form: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    title: PropTypes.string,
    comment: PropTypes.string,
  }).isRequired,
};

Modal.defaultProps = {

};
