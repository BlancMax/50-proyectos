

const Movie = ({title, poster_path, original_title}: {title:string, poster_path:string, original_title:string}) => {
    return (
        <div>
            <img className="poster" src={`https://image.tmdb.org/t/p/original${poster_path}`}  />
            {title}
            {original_title}
        </div>
    );
};

export default Movie;