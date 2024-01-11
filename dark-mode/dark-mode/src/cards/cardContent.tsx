import styled from 'styled-components';

const CardContainer = styled.div`
  border: 3px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
  padding: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: auto;
  height: auto;
  padding: 5px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 16px;
  
`;

const CardTitle = styled.h5`
  margin-bottom: 2px;
`;

const CardDescription = styled.p`
  color: #555;
`;

const CardContent = () => {
    const cards = [
        {
            title: 'AMD R7260X',
            imageSrc: './AMD_R7260X.jpg',
            description: 'Placa de buena relación precio-calidad, de buena potencia',
        },
        {
            title: 'AMD R9280X',
            imageSrc: './AMD_R9280X.jpg',
            description: 'Placa para los más exigentes',
        },
        {
            title: 'AMD RX550',
            imageSrc: './AMD_RX550.jpg',
            description: 'Placa básica para jugar.',
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