import { useEffect, useState } from "react";
import Movie from "./Movie";
import { MovieInterface } from "./MovieInterface";
import "./App.css";

export default function Movies () {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState<MovieInterface[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState (1);

    useEffect(() =>{
        if (isLoading) {
            async function fetchData() {
                try {
                    const response = await fetch(
                        `https://api.themoviedb.org/3/movie/popular?api_key=d5c775389c73a0b2a2bc815d05093528&page=${page}`
                    );
                    if (response.ok) {
                        const data = await response.json();
                        setMovies(data.results);
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
    }, [page]);
    const nextPage = () => {
        setPage(prev=> prev = prev+1) ;
        setIsLoading(true);
    };

    const prevPage = () => {
        if (page>1) {
        setPage(prev=> prev-1);
        setIsLoading(true);}
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
                
            </div>
        );
    }

    return (
        <div className="App">
            {movies!.map((movie:MovieInterface) => <Movie title={movie.title} poster_path={movie.poster_path} original_title={movie.original_title}/>)  }
            <button className="buttonMovie" onClick={nextPage}>Next Page</button>
            <button className="buttonMovie" onClick={prevPage}>Previus Page</button>
        </div>
    );
} 