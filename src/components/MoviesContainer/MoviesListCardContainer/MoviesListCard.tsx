import React, {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";
import {Rating} from "@mui/material";

import {IMovieRes} from "../../../interfaces";
import {poster} from "../../../constants";
import css from './MoviesListCard.module.css'
import {useAppContext} from "../../../hoc";

interface IProps extends PropsWithChildren {
    movie:IMovieRes
}

const MoviesListCard: FC<IProps> = ({movie}) => {

    const { title, poster_path, vote_average} = movie;
    const image = poster + poster_path
    const {darkMode} = useAppContext();
    const navigate = useNavigate();


    return (
        <div className={css.MoviesListCard} onClick={() => navigate('/movieInfo', {state: {movie}})}>
            <div className={darkMode ? css.MoviesListCardTitleDark : css.MoviesListCardTitle}>{title}</div>
            <img className={css.MoviesListCardImage} src={image} alt="poster"/>
            <Rating name="half-rating-read" sx={{position: 'relative', zIndex: '1', }} defaultValue={vote_average / 2} precision={0.5}  size="large" readOnly/>
        </div>
    );
};

export {MoviesListCard};