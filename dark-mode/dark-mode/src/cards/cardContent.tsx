import Card from './Card';


const CardContent = ({ className }) => {
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
        <div className={`${className} contenedor`}>
            {cards.map((item, index) => (
                <Card title={item.title}
                    imageSrc={item.imageSrc}
                    description={item.description}
                    index={index} />
            ))}
        </div>
    );
};

export default CardContent;