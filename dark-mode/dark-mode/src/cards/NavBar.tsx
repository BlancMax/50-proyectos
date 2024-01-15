import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { useState } from 'react';
import { Button } from './Button';


const NavContainer = styled.nav`
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0;
    padding: 2rem;
    
    a{
        color: white;
        text-decoration: none;
        margin-left: 1em;
        display: flex;
        align-items: center;
        font-family: "Times New Roman", system-ui;
    }
`

const NavBar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode =() =>{
        setDarkMode (!darkMode);
    }
    return (
        <>
            <NavContainer>
            <GlobalStyle darkMode={darkMode} />
                <a href='/'>Home</a>
                <a href='/'>Contact</a>
                <a href='/'>About</a>
                <Button onClick={toggleDarkMode}>
                    {darkMode ? "Modo Claro" : "Modo Oscuro"}
                </Button>
            </NavContainer>  
        </>
    );
};

export default NavBar;

