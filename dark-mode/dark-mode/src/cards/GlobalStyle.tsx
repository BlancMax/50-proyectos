import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";

interface GlobalProps {
    darkMode: boolean
};

const GlobalStyles = createGlobalStyle<GlobalProps>`
body {
    background-color: ${(props) => (props.darkMode ? "black" : "white")};
    color: ${(props) => (props.darkMode ? "white" : "black")};
    font-family: Arial;
    .contenedor{
        background-color: ${(props) => (props.darkMode ? "black" : "white")};
        color: ${(props) => (props.darkMode ? "white" : "black")};
        font-family: Arial;
    }
}
`;

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
        console.log(darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <>
            <GlobalStyles darkMode={darkMode} />
            <button onClick={toggleDarkMode}>
                {darkMode ? "Modo Claro" : "Modo Oscuro"}
            </button>
        </>
    );
};

export default DarkModeToggle;