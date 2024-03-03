import React, {FC, PropsWithChildren, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Rating} from "@mui/material";

import {poster} from "../../../constants";
import css from './MovieInfo.module.css'
import {IGenresRes, IMovieRes} from "../../../interfaces";
import {genreService} from "../../../services";
import {useAppContext} from "../../../hoc";

interface IProps extends PropsWithChildren {
    movieInfo:IMovieRes
}

const MovieInfo: FC<IProps> = ({ movieInfo }) => {
    const { title, poster_path, vote_average, overview, adult, release_date, genre_ids } = movieInfo;
    const [genres, setGenres] = useState<IGenresRes[]>([]);
    const { darkMode } = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGenres = async () => {
            if (genre_ids && genre_ids.length > 0) {
                const genrePromises = genre_ids.map(async (genreId) => {
                    const response = await genreService.getGenreById(genreId);
                    return response.data;
                });

                const genresData = await Promise.all(genrePromises);
                setGenres(genresData);
            }
        };

        fetchGenres();
    }, [genre_ids]);

    console.log(genres);

    const image = poster + poster_path;

    return (
        <div className={darkMode ? css.MovieInfoDark : css.MovieInfo}>
            <img className={css.MovieInfoImage} src={image} alt="poster" />
            <div className={css.MovieInfoDescription}>
                <div className={darkMode ? css.MovieInfoTitleDark : css.MovieInfoTitle}>{title}</div>
                <div className={darkMode ? css.MovieInfoOverviewDark : css.MovieInfoOverview}>{overview}</div>
                <div className={css.MovieInfoGenresCont}>
                    {genres.length > 0 ? (
                        genres.map((genre) => (
                            <span onClick={() => navigate(`/genre/${genre.id}`)} key={genre.id}>
                                {genre.name}{' '}
                            </span>
                        ))
                    ) : (
                        <span>No genres available</span>
                    )}
                </div>
                <div className={darkMode ? css.MovieInfoReleaseDateDark : css.MovieInfoReleaseDate}>
                    Release date: {release_date}
                </div>
                <div className={darkMode ? css.MovieInfoReleaseDateDark : ''}>
                    {adult ? 'Not for Kids 18+' : 'Good for kids'}
                </div>
                <Rating name="half-rating-read" defaultValue={vote_average / 2} precision={0.5} readOnly />
            </div>
        </div>
    );
};

export { MovieInfo };