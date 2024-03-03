import React, {useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {usePageQuery} from "../../../hooks";
import {Search} from "../Search";
import css from './SearchForm.module.css'
import {useAppContext} from "../../../hoc";
import {ISearch} from "../../../interfaces";
import {searchService} from "../../../services";

const SearchForm = () => {

    const {register,handleSubmit, reset} = useForm();
    const [keyWord, setKeyWord] = useState<string>()
    const {darkMode} = useAppContext();
    const navigate = useNavigate();

    const searchMovie:SubmitHandler<any> = (query) => {
        setKeyWord(query.keyWord)
        reset()
    }


    const [keyWords, setkeyWords] = useState<ISearch>({page:null, results: []})
    const {page, prev, next} = usePageQuery();

    useEffect(() => {
        searchService.getAllByKeyWord(keyWord, page).then(({data}) => setkeyWords(data))
    }, [keyWord, page]);

    const words = keyWords.results

    return (
        <div className={darkMode ? css.SearchFormDark : css.SearchForm}>
            <div>
            <form className={css.SearchFormCont} onSubmit={handleSubmit(searchMovie)}>
                <input className={css.SearchFormInput} type="text" placeholder={'Search movie'} {...register('keyWord')}/>
                <button className={css.SearchFormButton} onClick={() => {navigate('', {state: {keyWord}})}}>Search</button>
            </form>
            </div>
            <div className={css.SearchFormMovies}>
            {words.map(word => <Search key={word.id} word={word}/>)}
            </div>
            <div className={keyWord? css.SearchFormNavCont: css.SearchFormNavContDisplayNone}>
            <button className={css.SearchFormButton} onClick={prev} disabled={+page <= 1}>prev</button>
            <p className={css.SearchFormPageCounter}>{page}</p>
            <button className={css.SearchFormButton} onClick={next} disabled={+page >= 500}>next</button>
            </div>
        </div>
    );
};

export {SearchForm};