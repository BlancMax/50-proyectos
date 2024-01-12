import React from 'react';
import styled from 'styled-components';
import DarkModeToggle from './GlobalStyle';

const NavContainer = styled.nav`
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
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
    return (
        <>
            <NavContainer>
                <a href='/'>Home</a>
                <a href='/'>Contact</a>
                <a href='/'>About</a>
                <button {...DarkModeToggle}/>
            </NavContainer>  
        </>
    );
};

export default NavBar;

