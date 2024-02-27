import {FC, PropsWithChildren} from "react";

import {IMovieRes} from "../../interfaces";
import {poster} from "../../constants";

interface IProps extends PropsWithChildren {
    movie:IMovieRes
}

const MoviesListCard: FC<IProps> = ({movie}) => {

    const {title, poster_path, overview, vote_count} = movie;
    const image = poster + poster_path

    return (
        <div>
            <div>title: {title}</div>
            <img src={image} alt="poster"/>
            <div>overview: {overview}</div>
        </div>
    );
};

export {MoviesListCard};