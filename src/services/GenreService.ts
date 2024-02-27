import {urls} from "../constants";
import {IRes} from "../types";
import {IGenre} from "../interfaces";
import {apiService} from "./ApiService";

const genreService = {
    getAll: ():IRes<IGenre[]> => apiService.get(urls.genres.base)
}

export {
    genreService
}