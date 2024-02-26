const baseURL = 'https://developers.themoviedb.org/3'

const movies = '/discover/movie'
const genres = '/genre/movie/list'
const poster ='https://image.tmdb.org/t/p/w500'

const urls = {
    movies: {
        base: movies,
        moviePosterByPoster_path: (poster_path: string) => `${poster}${poster_path}`
    },
    genres: {
        base: genres
    }
}

export {
    baseURL,
    urls
}