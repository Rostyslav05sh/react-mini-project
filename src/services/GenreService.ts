import {urls} from "../constants";
import {IRes} from "../types";
import {IGenres} from "../interfaces";
import {apiService} from "./ApiService";

const genreService = {
    getAll: ():IRes<IGenres> => apiService.get(urls.genres.base),
    getMoviesByGenres: (id:string, page:string) => apiService.get(urls.genres.moviesByGenres(id), {params: {page}})
}

export {
    genreService
}