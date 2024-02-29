import {apiService} from "./ApiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {ISearch, ISearchKeyWord} from "../interfaces/searchInterface";

const searchService = {
    getAllByKeyWord: (word:string):IRes<ISearch> => apiService.get(urls.search.searchByKeyWord(word))
}

export {
    searchService
}