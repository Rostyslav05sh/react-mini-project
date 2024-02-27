import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IMovie, IMovieRes} from "../../interfaces";
import {movieService} from "../../services";
import {MoviesListCard} from "./MoviesListCard";

interface IProps extends PropsWithChildren {

}

const MoviesList: FC<IProps> = () => {

    const [movies, setMovies] = useState<IMovie>()
    movieService.getAll().then(({data}) => console.log(data))

    useEffect(() => {
        movieService.getAll().then(({data})=> setMovies(data)
        )}, []);

    return (
        <div>
            {/*{movies.results.map(result =>  <MoviesListCard key={result.id} result={result}/>)}*/}
            {movies && <MoviesListCard movies={movies}/>}
            <button>prev</button>
            <button>next</button>
        </div>
    );
};

export {MoviesList};