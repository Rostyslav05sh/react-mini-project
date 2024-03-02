import React, {FC, PropsWithChildren} from "react";
import {Rating} from "@mui/material";
import {useNavigate} from "react-router-dom";

import {IMovieRes} from "../../interfaces";
import {poster} from "../../constants";
import {usePageQuery} from "../../hooks";

interface IProps extends PropsWithChildren {
    movieByKeyWord:IMovieRes
}

const SearchMoviesByKeyWord: FC<IProps> = ({movieByKeyWord}) => {

    const {title, poster_path, vote_average} = movieByKeyWord;
    const navigate = useNavigate();


    const image = poster + poster_path

    return (
        <div onClick={() => navigate('/movieInfo', {state: {movieByKeyWord}})}>

            <div>title: {title}</div>
            <img src={image} alt={`${title} poster`}/>
            <Rating name="half-rating-read" defaultValue={vote_average / 2} precision={0.5} readOnly />
        </div>
    );
};

export {SearchMoviesByKeyWord};