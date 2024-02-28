import {FC, PropsWithChildren} from "react";
import {IGebresRes, IMovieRes} from "../../interfaces";
import {useAppLocation} from "../../hooks/useAppLocation";

interface IProps extends PropsWithChildren {
    movie:IMovieRes
}

const MovieByGenre: FC<IProps> = ({movie}) => {

    const {id,genre_ids} = movie;
    const {state: {genre}} = useAppLocation<{genre: IGebresRes}>();

    genre_ids.map(genreId => {
        if (genreId == genre.id) {
            
        }
    })



    return (
        <div>

        </div>
    );
};

export {MovieByGenre};