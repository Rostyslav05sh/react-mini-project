import React, {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";
import {Rating} from "@mui/material";

import {IMovieRes} from "../../../interfaces";
import {poster} from "../../../constants";
import css from './SearchMovieByKeyWord.module.css'
import {useAppContext} from "../../../hoc";

interface IProps extends PropsWithChildren {
    movieByKeyWord:IMovieRes
}

const SearchMoviesByKeyWord: FC<IProps> = ({movieByKeyWord}) => {

    const {title, poster_path, vote_average} = movieByKeyWord;
    const {darkMode} = useAppContext();
    const navigate = useNavigate();


    const image = poster + poster_path

    return (
        <div className={css.SearchMoviesByKeyWord} onClick={() => navigate('/movieInfo', {state: {movieByKeyWord}})}>
            <div className={darkMode ? css.SearchMoviesByKeyWordTitleDark : css.SearchMoviesByKeyWordTitle}>{title}</div>
            <img className={darkMode ? css.SearchMoviesByKeyWordImageDark : css.SearchMoviesByKeyWordImage} src={image} alt={`${title} poster`}/>
            <Rating name="half-rating-read" defaultValue={vote_average / 2} precision={0.5} readOnly />
        </div>
    );
};

export {SearchMoviesByKeyWord};