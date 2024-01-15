import styled from "styled-components";

export const CardContainer = styled.div`
  border: 3px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
  padding: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

export const CardImage = styled.img`
  width: 40%;
  height: 40%;
  padding: 5px;
  margin: 10px;

`;

export const CardBody = styled.div`
    padding: 6px;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const CardTitle = styled.h5`
  margin-bottom: 2px;
`;

export const CardDescription = styled.p`
  color: #555;
  max-width: 10rem;
`;

