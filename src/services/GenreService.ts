import {urls} from "../constants";
import {IRes} from "../types";
import {IGenres} from "../interfaces";
import {apiService} from "./ApiService";

const genreService = {
    getAll: ():IRes<IGenres> => apiService.get(urls.genres.base),
    getGenreById:(id:number) => apiService.get(urls.genres.genreById(id)),
    getMoviesByGenres: (id:string, page:string) => apiService.get(urls.genres.moviesByGenres(id), {params: {page}})
}

export {
    genreService
}