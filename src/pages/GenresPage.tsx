import {IGebresRes, IMovie} from "../interfaces";
import {useEffect, useState} from "react";
import {movieService} from "../services";
import {useAppLocation} from "../hooks/useAppLocation";
import {MoviesListCard} from "../components";
import {MovieByGenre} from "../components/GenresContainer/MovieByGenre";

const GenresPage= () => {

    const [movieByGenre, setMovieByGenre] = useState<IMovie>()

    useEffect(() => {
        movieService.getAll('page').then(({data}) => {
            setMovieByGenre(data)
        })
    }, []);
    const movies = movieByGenre.results

    return (
        <div>
            {movies.map(movie =>  <MovieByGenre key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {GenresPage};