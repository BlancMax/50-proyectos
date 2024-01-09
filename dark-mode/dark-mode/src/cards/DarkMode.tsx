import React, { useState, useEffect} from "react";
import styled from "styled-components";


const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState (false);

    useEffect(() =>{
        const Button = styled.button`
        background: tomato;
        font-size: 1em;
        margin: 1em;
        border: 2px solid black;
        `;
        
    })
}