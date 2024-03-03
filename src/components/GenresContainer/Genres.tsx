import React, {FC, PropsWithChildren, useEffect, useState} from "react";

import {genreService} from "../../services";
import {IGenres} from "../../interfaces";
import {Genre} from "./Genre";

interface IProps extends PropsWithChildren {

}

const Genres: FC<IProps> = () => {

    const [genresRes, setGenres] = useState<IGenres>({genres: []})

    useEffect(() => {
        genreService.getAll().then(({data}) => setGenres(data))
    }, []);

    const genres = genresRes.genres

    return (
        <div>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};