import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../interfaces";

interface IProps extends PropsWithChildren {
movie: IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {

    const {results,page} = movie;

    return (
        <div>
            <div>page: {page}</div>
            <h1>sfg</h1>
        </div>
    );
};

export {MoviesListCard};