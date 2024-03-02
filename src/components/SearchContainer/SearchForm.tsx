import {SubmitHandler, useForm} from "react-hook-form";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {ISearch} from "../../interfaces/searchInterface";
import {searchService} from "../../services/SearchService";
import {Search} from "./Search";
import {usePageQuery} from "../../hooks";

const SearchForm = () => {

    const {register,handleSubmit, reset} = useForm();
    const [keyWord, setKeyWord] = useState<string>()
    const navigate = useNavigate();

    const searchMovie:SubmitHandler<any> = (query) => {
        setKeyWord(query.keyWord)
        reset()
    }
    console.log(keyWord+ 'dgsk;lk;dsgn')


    const [keyWords, setkeyWords] = useState<ISearch>({page:null, results: []})
    const {page, prev, next} = usePageQuery();

    useEffect(() => {
        searchService.getAllByKeyWord(keyWord, page).then(({data}) => setkeyWords(data))
    }, [keyWord, page]);

    const words = keyWords.results

    return (
        <div>
            <form onSubmit={handleSubmit(searchMovie)}>
                <input type="text" placeholder={'Search movie'} {...register('keyWord')}/>
                <button onClick={() => {navigate('search', {state: {keyWord}})}}>Search</button>
            </form>
            <button onClick={prev} disabled={+page === 1}>prev</button>
            <button onClick={next} disabled={+page === 500}>next</button>
            {words.map(word => <Search key={word.id} word={word}/>)}
        </div>
    );
};

export {SearchForm};