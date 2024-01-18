import { useState } from 'react';
import "./index.css";

export default function Modal () {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className='btn-modal'> Open </button>
      <div className="modal">
        <div className="overlay"></div>
        <div className="modal-content">
        <img src="ok-icon.png" alt="Icon OK" />
          <h2>Hello Modal</h2>
          <button className='close-button' onClick={toggleModal}>X</button>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laboriosam?</p>
          <button className='btn-cancel'>Cancel</button>
          <button className='btn-confirm'>Confirm</button>
        </div>
      </div>
    </>
  )
};
