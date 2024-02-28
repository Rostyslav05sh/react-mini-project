import {urls} from "../constants";
import {IRes} from "../types";
import {IMovie, IMovieRes} from "../interfaces";
import {apiService} from "./ApiService";

const movieService = {
    getAll: (page:string):IRes<IMovie> => apiService.get(urls.movies.base, {params: {page}}),
    getMovieById: (id:number) => apiService.get(urls.movies.movieById(id)),
    getMoviePosterByPoster_path: (poster_path:string):IRes<IMovieRes> => apiService.get(urls.movies.moviePosterByPoster_path(poster_path)),
    getMovieImageById: (id:number) => apiService.get(urls.movies.movieImageById(id))
}

export {
    movieService
}