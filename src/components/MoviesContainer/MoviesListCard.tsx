import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IMovie, IMovieRes} from "../../interfaces";

interface IProps extends PropsWithChildren {
    movies:IMovie
}

const MoviesListCard: FC<IProps> = ({movies}) => {

    const {page, results} = movies;

    const [poster, setPoster] = useState<IMovieRes>()


    useEffect(() => {

        }, []);

    return (
        <div>
            <div>page: {page}</div>
            <div>title: {results[0].title}</div>
        </div>
    );
};

export {MoviesListCard};