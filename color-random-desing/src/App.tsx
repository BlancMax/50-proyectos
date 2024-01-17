import { Button } from './UI/Button';
import { useState, useEffect } from 'react';


const App = () => {

  const [colorBackground, setColorBackground] = useState('');

  useEffect(() => {
    createRandomColor();
  }, []);
  const createRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setColorBackground(`rgb(${r},${g},${b})`);
  };
  const changeColor = () => {
    createRandomColor();
  }

  return (
    <div className='Container' style={{ backgroundColor: colorBackground }}>
      <Button onClick={changeColor} >
        Change Color {colorBackground}
      </Button>
    </div>
  );
};

export default App;
