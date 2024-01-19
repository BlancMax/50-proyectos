import React, { useState } from 'react';
import Modal from './Modal';

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
};

export default App;
