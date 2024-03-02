import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

import {IGebresRes} from "../../interfaces";

interface IProps extends PropsWithChildren {
    genre:IGebresRes
}

const Genre: FC<IProps> = ({genre}) => {

    const {id, name} = genre;
    const navigate = useNavigate();

// , {state:{id}}


    return (
        <div>
            <div onClick={() => navigate(`genre/${id}`)}>{name}</div>
        </div>
    );
};

export {Genre};