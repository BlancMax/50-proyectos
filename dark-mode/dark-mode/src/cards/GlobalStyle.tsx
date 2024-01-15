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
        display: flex;
        justify-content: center;
    }
}
`;

const DarkModeToggle = ({darkMode} : GlobalProps) => { 
    
    return (
        <>
            <GlobalStyles darkMode={darkMode} />
        </>
    );
};

export default DarkModeToggle;