import {FC, PropsWithChildren} from "react";
import {SearchForm} from "../SearchContainer/SearchForm";
import {Genres} from "../GenresContainer/Genres";

interface IProps extends PropsWithChildren {

}

const Header: FC<IProps> = () => {
    return (
        <div>
            <h1>Header</h1>
            <Genres/>
            <SearchForm/>
        </div>
    );
};

export {Header};