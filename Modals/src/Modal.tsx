import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);

  const handleClose = () => {
    setModalOpen(false);
    onClose();
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={handleClose}>
              Close
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
