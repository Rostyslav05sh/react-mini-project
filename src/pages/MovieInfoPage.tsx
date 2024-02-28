import {useAppLocation} from "../hooks/useAppLocation";
import {IMovie, IMovieRes} from "../interfaces";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {movieService} from "../services";
import {MovieInfo} from "../components";

const MovieInfoPage = () => {
    const {state} = useAppLocation<{movie: IMovieRes}>();
    const [movieInfo, setMovieInfo] = useState<IMovieRes>(null)
    const {id} = useParams();

    useEffect(() => {
        if (state?.movie) {
            setMovieInfo(state.movie)
        } else {
            movieService.getMovieById(+id).then(({data}) => setMovieInfo(data))
        }
    }, [id, state]);


    return (
        <div>
            {movieInfo && <MovieInfo movieInfo={movieInfo}/>}
        </div>
    );
};

export {MovieInfoPage};