import React from 'react';
import Modal from 'react-modal';
import style from './SubmissionModal.module.css';
Modal.setAppElement('#root'); // Set the root element for the modal

function SubmissionStatusModal({ isOpen, onRequestClose, isSuccess }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Submission Status Modal"
      className={style.custom_modal} // Add a custom class for styling
    >
     
      {isSuccess ? (
        <p>The Form  Has Been Submitted Successfully!</p>
      ) : (
        <p>Form submission failed. Please try again later.</p>
      )}
      
    </Modal>
  );
}

export default SubmissionStatusModal;
