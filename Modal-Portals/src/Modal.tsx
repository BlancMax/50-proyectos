import { useState } from 'react';
import "./index.css";

export default function Modal() {
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
          <div className="modal-icon"><img src="ok-icon.png" alt="Icon OK" />
            <div className="modal-header">
              <h2>Blog Spot Published</h2>
            </div>
            <button className='close-button' onClick={toggleModal}>X</button>
          </div>
          <div className="modal-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laboriosam?</p>
          </div>
          <div className="modal-footer">
            <button className='btn-cancel'>Cancel</button>
            <button className='btn-confirm'>Confirm</button>
          </div>
        </div>
      </div>
    </>
  )
};
