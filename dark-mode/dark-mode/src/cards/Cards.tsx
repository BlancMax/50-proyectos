import { Button } from './Button';
import CardContent from './cardContent';
import DarkModeToggle from './DarkMode';
import GlobalStyles from './GlobalStyle';


const cards = () => {
    const {darkMode, toggleDarkMode} = DarkModeToggle();

    return (
        <div>
            <CardContent />
            <GlobalStyles/>
            <Button onClick={toggleDarkMode}>
                {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
                
            </Button>
        </div>
    );
};

export default cards;