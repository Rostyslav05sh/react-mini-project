import {FC, PropsWithChildren} from "react";

interface IProps extends PropsWithChildren {

}

const MoviesPage: FC<IProps> = () => {
    return (
        <div>
            MoviesPage
        </div>
    );
};

export {MoviesPage};