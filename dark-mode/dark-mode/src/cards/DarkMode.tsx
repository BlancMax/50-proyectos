import React, { useState, useEffect} from "react";
import styled from "styled-components";


const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState (false);

    useEffect(() =>{
       /*  document.body.classList.toggle('dark-mode', darkMode); */
       window.matchMedia(`(prefers-color-scheme: ${darkMode? 'dark' : 'light'})`)
       console.log (darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode (!darkMode);
    };

    return { darkMode, toggleDarkMode };
};

export default DarkModeToggle;