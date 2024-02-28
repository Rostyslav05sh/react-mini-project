import React, {FC, PropsWithChildren} from "react";

import {IMovieRes} from "../../interfaces";
import {poster, urls} from "../../constants";
import {Rating} from "@mui/material";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    movie:IMovieRes
}

const MoviesListCard: FC<IProps> = ({movie}) => {

    const { title, poster_path, overview, vote_average} = movie;
    const image = poster + poster_path
    const navigate = useNavigate();


    return (
        <div onClick={() => navigate('/movieInfo', {state: {movie}})}>
            <div>title: {title}</div>
            <img src={image} alt="poster"/>
            <Rating name="half-rating-read" defaultValue={vote_average / 2} precision={0.5} readOnly />
        </div>
    );
};

export {MoviesListCard};