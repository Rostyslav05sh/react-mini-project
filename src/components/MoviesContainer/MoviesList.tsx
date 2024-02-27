import {FC, PropsWithChildren, useEffect, useState} from "react";

import {IMovie} from "../../interfaces";
import {movieService} from "../../services";
import {MoviesListCard} from "./MoviesListCard";
import {useSearchParams} from "react-router-dom";

interface IProps extends PropsWithChildren {

}

const MoviesList: FC<IProps> = () => {

    const [moviesRes, setMoviesRes] = useState<IMovie>({page: null, results: []})
    const [query, setQuery] = useSearchParams();
    movieService.getAll().then(({data}) => console.log(data))


    useEffect(() => {
        movieService.getAll().then(({data})=> setMoviesRes(data),
        )}, []);

    const movies = moviesRes.results
    const page = query.get('page')

    const prev = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString())
            return prev
        })
    }

    const next = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') + 1).toString())
            return prev
        })
    }

    return (
        <div>
            {movies.map(movie =>  <MoviesListCard key={movie.id} movie={movie}/>)}
            {/*{movies && <MoviesListCard movies={movies}/>}*/}
            <button onClick={prev} disabled={+page === 1}>prev</button>
            <button onClick={next} disabled={+page === 500}>next</button>
        </div>
    );
};

export {MoviesList};