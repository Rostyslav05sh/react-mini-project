import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

import css from '../Header/Header.module.css'
import {IGenresRes} from "../../interfaces";

interface IProps extends PropsWithChildren {
    genre:IGenresRes
}

const Genre: FC<IProps> = ({genre}) => {

    const {id, name} = genre;
    const navigate = useNavigate();


    return (
        <div>
            <div className={css.headerBlockGenres} onClick={() => navigate(`genre/${id}`)}>{name}</div>
        </div>
    );
};

export {Genre};