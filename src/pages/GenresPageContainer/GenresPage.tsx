import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import css from './GenresPage.module.css'
import {IMovie} from "../../interfaces";
import {usePageQuery} from "../../hooks";
import {genreService} from "../../services";
import {useAppContext} from "../../hoc";
import {MoviesByGenre} from "../../components";


const GenresPage= () => {

    const [movieByGenre, setMovieByGenre] = useState<IMovie>({page: null, results: []})
    const {page, prev, next} = usePageQuery();
    const {darkMode} = useAppContext();
    const {id} = useParams();

    const genreId = id

    useEffect(() => {
        genreService.getMoviesByGenres(genreId.toString(), page).then(({data}) => {
            setMovieByGenre(data)
        })
    }, [genreId, page]);

    const movies = movieByGenre.results


    return (
        <div className={darkMode ? css.GenresPageDark : css.GenresPage}>
            {movies.map(movie =>  <MoviesByGenre key={movie.id} movie={movie}/>)}
            <div className={css.MovieListNavCont}>
            <button className={css.MoviesListButton} onClick={prev} disabled={+page <= 1}>prev</button>
            <p className={css.MoviesListPageCounter}>{page}</p>
            <button className={css.MoviesListButton} onClick={next} disabled={+page >= 500}>next</button>
            </div>
        </div>
    );
};

export {GenresPage};
