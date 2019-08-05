import React from 'react';

let name = document.getElementById('name');
let email = document.getElementById('email');
let modalWindow = document.getElementsByClassName('modal');

const Modal = () => {

  return (
      <div className="modal">
          <div className="modalContent">
              <h3>Ваше сообщение отправлено</h3>
              <p className="center-text">
              </p>
              <button
                  className="btn-main"
                  type="button"
              >
                  OK
              </button>
          </div>
      </div>
  )
};
export default Modal;