import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {IMovieRes} from "../interfaces";
import {movieService} from "../services";
import {MovieInfo} from "../components";
import {useAppLocation} from "../hooks";

const MovieInfoPage = () => {
    const {state} = useAppLocation<{movie: IMovieRes, movieByKeyWord: IMovieRes}>();
    const [movieInfo, setMovieInfo] = useState<IMovieRes>(null)
    const {id} = useParams();



    useEffect(() => {
        if (state?.movie) {
            setMovieInfo(state.movie)
        } else if (state?.movieByKeyWord) {
            setMovieInfo(state.movieByKeyWord)
        }
        else {
            movieService.getMovieById(+id).then(({data}) => setMovieInfo(data))
        }
    }, [id, state]);

    console.log('movieInfo', movieInfo);


    return (
        <div>
            {movieInfo && <MovieInfo movieInfo={movieInfo}/>}
        </div>
    );
};

export {MovieInfoPage};