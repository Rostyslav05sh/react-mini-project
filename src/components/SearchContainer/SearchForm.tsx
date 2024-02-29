import {SubmitHandler, useForm} from "react-hook-form";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {ISearch} from "../../interfaces/searchInterface";
import {searchService} from "../../services/SearchService";
import {Search} from "./Search";

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
    useEffect(() => {
        searchService.getAllByKeyWord(keyWord).then(({data}) => setkeyWords(data))
    }, [keyWord]);

    const words = keyWords.results

    return (
        <div>
            <form onSubmit={handleSubmit(searchMovie)}>
                <input type="text" placeholder={'Search movie'} {...register('keyWord')}/>
                <button onClick={() => {navigate('search', {state: {keyWord}})}}>Search</button>
            </form>
            {/*<SearchContainer keyWord={keyWord}/>*/}
            {words.map(word => <Search key={word.id} word={word}/>)}
        </div>
    );
};

export {SearchForm};