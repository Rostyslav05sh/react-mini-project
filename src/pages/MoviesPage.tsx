import {MoviesList} from "../components";
import {Outlet} from "react-router-dom";

const MoviesPage= () => {
    return (
        <div>
            <MoviesList/>
        </div>
    );
};

export {MoviesPage};