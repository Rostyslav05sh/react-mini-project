import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";

import {GenresPage, MoviesPage} from "./pages";
import {MainLayout} from "./layouts";
import {MovieInfoPage} from "./pages/MovieInfoPage";
import {SearchPage} from "./pages/SearchPage";
import {keyboard} from "@testing-library/user-event/dist/keyboard";
import {SearchContainer} from "./components/SearchContainer/SearchContainer";
const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
                    {
                        path: 'movies', element: <MoviesPage/>
                    },
                    {
                        path: 'genres', element: <GenresPage/>
                    },
                    {
                        path: 'movieInfo', element: <MovieInfoPage/>
                    },
            {
                path: '/genre/:id', element: <GenresPage/>
            },
            {
                path: '/search', element: <SearchPage/>, children: [
                    {
                        path: 'movie', element: <SearchContainer/>
                    }
                ]
            }
            ]
    }
])

export {
    router
}