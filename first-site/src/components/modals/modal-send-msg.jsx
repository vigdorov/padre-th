import React from 'react';
import PropTypes from 'prop-types';
import Modal from "./modal";

const ModalSendMsg = props => {
  // TODO: извлекаем из объекта -
  // const { name, title, comment } = props.form;
  const name = `${props.form.name}, `;
  const titleMsg = `${props.form.title} `;
  const commentText = `${props.form.comment} `;
  const header = (
    <h3>{name} сообщение отправлено</h3>
  );

  const footer = (
    <button
      className="btn-main"
      type="button"
      onClick = {props.onClose}
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
          {name} ваш комментарий на тему <br/> <b>{titleMsg}</b> <br/> с сообщением <br/><q>{commentText}</q> <br/> отправлен
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
