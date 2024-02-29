import React, {useEffect, useState} from "react";

import {IGebresRes, IMovie} from "../interfaces";
import {genreService} from "../services";
import {useAppLocation} from "../hooks/useAppLocation";
import {MoviesByGenre} from "../components/GenresContainer/MoviesByGenre";
import {usePageQuery} from "../hooks";


const GenresPage= () => {

    const [movieByGenre, setMovieByGenre] = useState<IMovie>({page:null, results: []})
    const {state: {genre}} = useAppLocation<{genre: IGebresRes}>();
    const {page, prev, next} = usePageQuery();

    console.log(genre)


    useEffect(() => {
        genreService.getMoviesByGenres(genre.id.toString(), page).then(({data}) => {
            setMovieByGenre(data)
        })
    }, [genre.id, page]);

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
