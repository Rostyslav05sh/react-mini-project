import {SubmitHandler, useForm} from "react-hook-form";
import React, {useState} from "react";
import {SearchContainer} from "./SearchContainer";
import {useNavigate} from "react-router-dom";

const SearchForm = () => {

    const {register,handleSubmit, reset} = useForm();
    const [keyWord, setKeyWord] = useState<string>()
    const navigate = useNavigate();

    const searchMovie:SubmitHandler<any> = (query) => {
        setKeyWord(query.keyWord)
        reset()
    }
    console.log(keyWord)

    return (
        <div>
            <form onSubmit={handleSubmit(searchMovie)}>
                <input type="text" placeholder={'Search movie'} {...register('keyWord')}/>
                <button onClick={() => {navigate('search', {state: {keyWord}})}}>Search</button>
            </form>
            <SearchContainer keyWord={keyWord}/>
        </div>
    );
};

export {SearchForm};