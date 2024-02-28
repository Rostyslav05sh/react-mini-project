import {FC, PropsWithChildren} from "react";
import {IGebresRes} from "../../interfaces";
import {NavLink, useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    genre:IGebresRes
}

const Genre: FC<IProps> = ({genre}) => {

    const {id, name} = genre;
    const navigate = useNavigate();

    return (
        <div>
            <div onClick={() => navigate('genre', {state:{genre}})}>{name}</div>
        </div>
    );
};

export {Genre};