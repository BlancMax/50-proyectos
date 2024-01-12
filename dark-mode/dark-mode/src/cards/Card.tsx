import {CardBody, CardContainer, CardDescription, CardImage, CardTitle } from './StyledCard';

interface CardProps {
    index: number;
    imageSrc: string;
    title: string;
    description: string;
} 

const Card  = ({index, imageSrc, title, description} : CardProps) => {
    return (
    <CardContainer key={index}>
          <CardImage src={imageSrc} alt={`Card ${index + 1}`} />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardBody>
        </CardContainer>
    );
};

export default Card;