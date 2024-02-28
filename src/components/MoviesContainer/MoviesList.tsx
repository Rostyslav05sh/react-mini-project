import {FC, PropsWithChildren, useEffect, useState} from "react";

import {IMovie} from "../../interfaces";
import {movieService} from "../../services";
import {MoviesListCard} from "./MoviesListCard";
import {usePageQuery} from "../../hooks";

interface IProps extends PropsWithChildren {

}

const MoviesList: FC<IProps> = () => {

    const [moviesRes, setMoviesRes] = useState<IMovie>({page: null, results: []})
    const {page, prev, next} = usePageQuery();
    movieService.getAll(page).then(({data}) => console.log(data))


    useEffect(() => {
        movieService.getAll(page).then(({data})=> setMoviesRes(data)
        )}, [page]);

    const movies = moviesRes.results


    return (
        <div>
            <button onClick={prev} disabled={+page === 1}>prev</button>
            <button onClick={next} disabled={+page === 500}>next</button>
            {movies.map(movie =>  <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};