import Card from './Card';


<<<<<<< HEAD
const CardContent = ({ className }:{className:string}) => {
=======
const CardContent = ({ className }) => {
>>>>>>> afc33ffb2f53790676e72b12bfd2e050e716922a
    const cards = [
        {
            title: 'AMD R7260X',
            imageSrc: './AMD_R7260X.jpg',
            description: 'Certainly! It seems like you re asking for a recommendation for a good price-to-performance ratio and powerful component',
        },
        {
            title: 'AMD R9280X',
            imageSrc: './AMD_R9280X.jpg',
            description: 'Board for the most demanding users',
        },
        {
            title: 'AMD RX550',
            imageSrc: './AMD_RX550.jpg',
            description: 'Basic board for gaming.',
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
<<<<<<< HEAD

=======
>>>>>>> afc33ffb2f53790676e72b12bfd2e050e716922a
        </div>
    );
};

export default CardContent;