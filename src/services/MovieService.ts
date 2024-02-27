import {urls} from "../constants";
import {IRes} from "../types";
import {IMovie, IMovieRes} from "../interfaces";
import {apiService} from "./ApiService";

const movieService = {
    getAll: ():IRes<IMovie> => apiService.get(urls.movies.base),
    getMoviePosterByPoster_path: (poster_path):IRes<IMovieRes> => urls.movies.moviePosterByPoster_path(poster_path)
}

export {
    movieService
}