import { createPortal } from 'react-dom';
import "./index.css";


export default function Modal({ isOpen, onClose }: {isOpen:boolean, onClose:()=>void}) {
  
  if(!isOpen) return null;

  return createPortal (
    <>

      <div className="modal">
        <div className="modal-overlay"></div>
        <div className="modal-content">
          <div className="modal-icon"><img src="ok-icon.png" alt="Icon OK" />
            <div className="modal-header">
              <h2>Blog Spot Published</h2>
            </div>
            <button className='close-button' onClick={onClose}>X</button>
          </div>
          <div className="modal-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laboriosam?</p>
          </div>
          <div className="modal-footer">
            <button className='btn-cancel' onClick={onClose}>Cancel</button>
            <button className='btn-primary' onClick={onClose}>Confirm</button>         
          </div>
        </div>
      </div>
    </>
       , document.getElementById('modal-root')!
  )
};
