import {Outlet} from "react-router-dom";
import {Header} from "../components";
import {Genres} from "../components/GenresContainer/Genres";


const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};