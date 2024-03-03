import {urls} from "../constants";
import {IRes} from "../types";
import {IMovie} from "../interfaces";
import {apiService} from "./ApiService";

const movieService = {
    getAll: (page:string):IRes<IMovie> => apiService.get(urls.movies.base, {params: {page}}),
    getMovieById: (id:number) => apiService.get(urls.movies.movieById(id))
}

export {
    movieService
}