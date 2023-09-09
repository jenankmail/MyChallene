import React from 'react';
import Modal from 'react-modal';
import style from './ErrorModal.module.css'
Modal.setAppElement('#root'); // Set the root element for the modal

function ErrorModal({ isOpen, onRequestClose, errors }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Error Modal"
      className={style.error}
    >
     <>{errors.map((error, index) => (
          <p>{error}</p>
        ))}</>
      
     
    </Modal>
  );
}

export default ErrorModal;
