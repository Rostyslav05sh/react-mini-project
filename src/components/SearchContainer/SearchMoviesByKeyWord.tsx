import React, {FC, PropsWithChildren} from "react";
import {IMovieRes} from "../../interfaces";
import {poster} from "../../constants";
import {Rating} from "@mui/material";

interface IProps extends PropsWithChildren {
    movieByKeyWord:IMovieRes
}

const SearchMoviesByKeyWord: FC<IProps> = ({movieByKeyWord}) => {

    const {title, poster_path, vote_average} = movieByKeyWord;

    const image = poster + poster_path

    return (
        <div>
            <div>title: {title}</div>
            <img src={image} alt="poster"/>
            <Rating name="half-rating-read" defaultValue={vote_average / 2} precision={0.5} readOnly />
        </div>
    );
};

export {SearchMoviesByKeyWord};