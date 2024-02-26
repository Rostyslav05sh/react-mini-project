import {apiService} from "./ApiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IMovie} from "../interfaces";

const movieService = {
    getAll: (page:string):IRes<IMovie[]> => apiService.get(urls.movies.base, {params: page}),
    getMoviePosterByPoster_path: (poster_path: string) => urls.movies.moviePosterByPoster_path(poster_path)
}

export {
    movieService
}