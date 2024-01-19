import { useState } from 'react';
import Modal from './Modal';



const App: React.FC = () => {
  const[isOpen, setOpen]=useState(false)
  return (
    <>
      <button className='btn-primary' onClick={()=> {setOpen(true)}}>Open</button>
      <Modal isOpen={isOpen} onClose={()=>setOpen(false)} />
    </>
  );
};

export default App;
