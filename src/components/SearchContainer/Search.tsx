import React, {FC, PropsWithChildren, useEffect, useState} from "react";

import {IMovieRes, ISearchRes} from "../../interfaces";
import {movieService} from "../../services";
import {SearchMoviesByKeyWord} from "./SearchMoviesByKeyWord/SearchMoviesByKeyWord";

interface IProps extends PropsWithChildren {
    word:ISearchRes
}

const Search: FC<IProps> = ({word}) => {

    const {id} = word;

    const [movieByKeyWord, setMovieByKeyWord] = useState<IMovieRes>()

    useEffect(() => {
        if (id !== undefined && id !== null) {
            movieService.getMovieById(id).then(({data}) => {
                if (data !== undefined && data !== null) {
                    setMovieByKeyWord(data);
                } else {
                    console.error(`Не вдалося отримати інформацію про фільм для айді ${id}`);
                }
            }).catch(error => {
                console.error(`Помилка при отриманні інформації про фільм для айді ${id}:`, error);
            });
        } else {
            console.error(`Айді не визначено для фільму`);
        }
    }, [id]);

    return (
        <div>
            {movieByKeyWord && <SearchMoviesByKeyWord movieByKeyWord={movieByKeyWord}/>}
        </div>
    );
};

export {Search};