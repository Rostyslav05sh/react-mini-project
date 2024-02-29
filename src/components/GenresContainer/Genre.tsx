import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

import {IGebresRes} from "../../interfaces";

interface IProps extends PropsWithChildren {
    genre:IGebresRes
}

const Genre: FC<IProps> = ({genre}) => {

    const {id, name} = genre;
    const navigate = useNavigate();

    return (
        <div>
            <div onClick={() => navigate(`genre/${id}`, {state:{genre}})}>{name}</div>
        </div>
    );
};

export {Genre};