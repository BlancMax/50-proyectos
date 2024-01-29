import { useEffect, useState } from "react";
import "./App.css";

export default function Movie () {
    const [isLoading, setIsLoading] = useState(true);
    const [imageUrl, setImageUrl] = useState(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() =>{
        if (isLoading) {
            async function fetchData() {
                try {
                    const response = await fetch(
                        "https://api.themoviedb.org/3/movie/popular?api_key=d5c775389c73a0b2a2bc815d05093528&page=1"
                    );
                    if (response.ok) {
                        const movie = await response.json();
                        setImageUrl(movie.poster_path);
                        setError(null);
                        setIsLoading(false);
                    } else {
                        setError("Hubo un error");
                    }
                } catch (error) {
                    setError("No pudimos hacer la solicitud");
                }
            }
            fetchData();
        }
    }, [isLoading]);
    const randomMovie = () => {
        setIsLoading(true);
    };

    if (isLoading) {
        return (
            <div className="App">
                <h1>Cargando...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div className="App">
                <h1>{error}</h1>
                <button onClick={randomMovie}>Volver a intentar</button>
            </div>
        );
    }

    return (
        <div className="App">
            {imageUrl && <img src={imageUrl} alt="Imagen de la película" />}
            <button onClick={randomMovie}></button>
        </div>
    );
} 