import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IMovie} from "../../interfaces";
import {movieService} from "../../services";
import {MoviesListCard} from "./MoviesListCard";
import {useSearchParams} from "react-router-dom";

interface IProps extends PropsWithChildren {

}

const MoviesList: FC<IProps> = () => {

    const [movies, setMovies] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const [prevNext, setPrevNext] = useState({prev: null, next: null})

    useEffect(() => {
        movieService.getAll(query.get('page')).then(({data}) => {
            setMovies(data)
            setPrevNext({prev: +query.get('page') - 1, next: +query.get('page') + 1})
        })

    }, []);
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
            {movies.map(movie =>  <MoviesListCard key={movie.results[0].id} movie={movie}/>)}
            <button disabled={!prevNext.prev} onClick={prev}>prev</button>
            <button disabled={!prevNext.next} onClick={next}>next</button>
        </div>
    );
};

export {MoviesList};