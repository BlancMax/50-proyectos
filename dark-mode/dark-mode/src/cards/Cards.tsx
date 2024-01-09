import { Button } from './Button';
import CardContent from './cardContent';
import DarkModeToggle from './DarkMode';


const cards = () => {
    const {darkMode, toggleDarkMode} = DarkModeToggle();

    return (
        <div>
            <CardContent />
            <Button onClick={toggleDarkMode}>
                {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
            </Button>
        </div>
    );
};

export default cards;