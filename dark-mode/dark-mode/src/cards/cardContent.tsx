import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  padding: 5px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h5`
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  color: #555;
`;

const CardContent = () => {
    const cards = [
        {
            title: 'Card 1',
            imageSrc: './AMD_R7260X.jpg',
            description: '',
        },
        {
            title: 'Card 1',
            imageSrc: './AMD_R9280X.jpg',
            description: '',
        },
        {
            title: 'Card 1',
            imageSrc: './AMD_RX550.jpg',
            description: '',
        },
    ];
    return (
        <div>
            {cards.map((card, index) => (
        <CardContainer key={index}>
          <CardImage src={card.imageSrc} alt={`Card ${index + 1}`} />
          <CardBody>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardBody>
        </CardContainer>
      ))}
        </div>
    );
};

export default CardContent;