import {Outlet} from "react-router-dom";
import {Header} from "../components";
import {Genres} from "../components/GenresContainer/Genres";


const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Genres/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};