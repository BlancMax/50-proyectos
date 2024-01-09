import { Button } from './Button';
import CardContent from './cardContent';
import DarkMode from './DarkMode';

const cards = () => {
    const {darkMode, toggleDarkMode} = useDarkMode();
    
    return (
        <div>
            <CardContent />
            <Button onClick={DarkMode}>
                {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
            </Button>
        </div>
    );
};

export default cards;