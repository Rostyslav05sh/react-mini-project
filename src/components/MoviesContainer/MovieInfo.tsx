import React, {FC, PropsWithChildren} from "react";
import {IMovie, IMovieRes} from "../../interfaces";
import {Rating} from "@mui/material";
import {poster} from "../../constants";
import {useParams} from "react-router-dom";

interface IProps extends PropsWithChildren {
    movieInfo:IMovieRes
}

const MovieInfo: FC<IProps> = ({movieInfo}) => {

    const {id, title, poster_path, vote_average} = movieInfo;

    const image = poster + poster_path

    return (
        <div>
            <div>title: {title}</div>
            <img src={image} alt="poster"/>
            <Rating name="half-rating-read" defaultValue={vote_average / 2} precision={0.5} readOnly />
        </div>
    );
};

export {MovieInfo};