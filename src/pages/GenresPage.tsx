import React, {useEffect, useState} from "react";

import {IGebresRes, IMovie} from "../interfaces";
import {genreService} from "../services";
import {useAppLocation} from "../hooks/useAppLocation";
import {MoviesByGenre} from "../components/GenresContainer/MoviesByGenre";
import {usePageQuery} from "../hooks";
import {useParams, useSearchParams} from "react-router-dom";


const GenresPage= () => {

    const [movieByGenre, setMovieByGenre] = useState<IMovie>({page:null, results: []})
    const {page, prev, next} = usePageQuery();

    const [query, setQuery] = useSearchParams({page: '1'});
    const {id} = useParams();


    const genreId = id
    console.log(genreId)


    useEffect(() => {
        genreService.getMoviesByGenres(genreId.toString(), page).then(({data}) => {
            setMovieByGenre(data)
        })
    }, [genreId, page]);

    const movies = movieByGenre.results


    return (
        <div>
            <button onClick={prev} disabled={+page === 1}>prev</button>
            <button onClick={next} disabled={+page === 500}>next</button>
            {movies.map(movie =>  <MoviesByGenre key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {GenresPage};
