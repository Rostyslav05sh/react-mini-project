import React, {FC, PropsWithChildren, useEffect, useState} from "react";

import css from './MovieList.module.css'
import {IMovie} from "../../../interfaces";
import {usePageQuery} from "../../../hooks";
import {movieService} from "../../../services";
import {MoviesListCard} from "../MoviesListCardContainer/MoviesListCard";
import {useAppContext} from "../../../hoc";

interface IProps extends PropsWithChildren {
}

const MoviesList: FC<IProps> = () => {

    const [moviesRes, setMoviesRes] = useState<IMovie>({page: null, results: []})
    const {darkMode} = useAppContext();
    const {page, prev, next} = usePageQuery();

    useEffect(() => {
        movieService.getAll(page).then(({data})=> setMoviesRes(data)
        )}, [page]);

    const movies = moviesRes.results


    return (
        <div className={darkMode ? css.MovieListDark : css.MovieList}>
            {movies.map(movie =>  <MoviesListCard key={movie.id} movie={movie}/>)}
            <div className={css.MovieListNavCont}>
            <button className={css.MoviesListButton} onClick={prev} disabled={+page <= 1}>prev</button>
            <p className={css.MoviesListPageCounter}>{page}</p>
            <button className={css.MoviesListButton} onClick={next} disabled={+page >= 500}>next</button>
            </div>
        </div>
    );
};

export {MoviesList};