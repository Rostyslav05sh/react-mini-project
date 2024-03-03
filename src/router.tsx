import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";

import {GenresPage, MovieInfoPage, MoviesPage} from "./pages";
import {MainLayout} from "./layouts";
import {SearchForm} from "./components";
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
                        path: '/search', element: <SearchForm/>

                    }
            ]
    }
])

export {
    router
}