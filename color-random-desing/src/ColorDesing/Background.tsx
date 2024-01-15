import { useState, useEffect } from 'react';
import { Button } from './Button';

const Background = () => {
    const [colorFondo, setColorFondo] = useState('');

    useEffect(() => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        setColorFondo(`rgb(${r},${g},${b})`);
    }, []); 

    return (
        <div style={{ backgroundColor: colorFondo }}>
            <Button onClick={() => setColorFondo(`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`)} />
        </div>
    );
};

export default Background;