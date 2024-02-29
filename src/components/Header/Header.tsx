import {FC, PropsWithChildren} from "react";
import {SearchForm} from "../SearchContainer/SearchForm";

interface IProps extends PropsWithChildren {

}

const Header: FC<IProps> = () => {
    return (
        <div>
            <h1>Header</h1>
            <SearchForm/>
        </div>
    );
};

export {Header};