import {urls} from "../constants";
import {IRes} from "../types";
import {IGenres} from "../interfaces";
import {apiService} from "./ApiService";

const genreService = {
    getAll: ():IRes<IGenres> => apiService.get(urls.genres.base)
}

export {
    genreService
}