import { Body } from './Body';
import { Button } from './Button';
import { useState, useEffect } from 'react';

const Background = () => {
   
        const [colorFondo, setColorFondo] = useState('');
    
        useEffect(() => {
            createRandomColor();
        }, []); 
            const createRandomColor =() =>{        
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
    
            setColorFondo(`rgb(${r},${g},${b})`);
            };
        const changeColor =() => {
            createRandomColor ();
        }
        return (
            <div>
                <Body colorFondo={colorFondo} /> 
                <Button onClick={changeColor} />

            </div>
        );
    };
     
export default Background;
