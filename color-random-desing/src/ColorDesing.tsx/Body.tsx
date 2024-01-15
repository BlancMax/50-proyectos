import styled from "styled-components";

interface BodyProps {
    colorFondo: string;
}

export const Body =styled.div<BodyProps>`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.colorFondo}; 
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
`