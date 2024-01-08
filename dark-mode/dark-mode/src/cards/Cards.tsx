import { Button } from './Button';
import { CardStyle } from './cardStyle';
import cardContent from './cardContent';

const cards = () => {
    return (
        <div>
            <CardStyle><cardContent/></CardStyle>
            
            <Button>More</Button>
        </div>
    );
};

export default cards;