import {apiService} from "./ApiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {ISearch} from "../interfaces";

const searchService = {
    getAllByKeyWord: (word:string, page:string):IRes<ISearch> => apiService.get(urls.search.searchByKeyWord(word), {params: {page}})
}

export {
    searchService
}