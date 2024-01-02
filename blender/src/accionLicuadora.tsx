import { useState } from "react";
import sound from './blender-mixer-smoothie-33026.mp3';

const Licuadora = () => {
    
    const[presionar, setPresionar] = useState(false)
    
    const handleClick =() =>{
        if (setPresionar === true)
            sound.play();
    }  
    
    return(
        <div
        id="licuadora"
        className={presionar?'shake':''}
        onClick={handleClick}
        >
    <h2>Mi Licuadora</h2>
    <img src="./blender-svgrepo-com.svg"/>
    <p>Haz click en el boton para accionar la Licuadora</p>    
    </div>
    );
};

export default Licuadora;
    
