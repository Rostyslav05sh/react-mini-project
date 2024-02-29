import {FC, PropsWithChildren, useEffect, useState} from "react";
import {ISearchRes} from "../../interfaces/searchInterface";
import {IMovie, IMovieRes} from "../../interfaces";
import {movieService} from "../../services";
import {SearchMoviesByKeyWord} from "./SearchMoviesByKeyWord";

interface IProps extends PropsWithChildren {
    word:ISearchRes
}

const Search: FC<IProps> = ({word}) => {

    const {id} = word;

    const [movieByKeyWord, setMovieByKeyWord] = useState<IMovieRes>()
    useEffect(() => {
        movieService.getMovieById(id).then(({data}) => setMovieByKeyWord(data))
    }, [id]);

    return (
        <div>
            {movieByKeyWord && <SearchMoviesByKeyWord movieByKeyWord={movieByKeyWord}/>}
        </div>
    );
};

export {Search};