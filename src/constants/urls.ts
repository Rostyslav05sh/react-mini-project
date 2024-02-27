
const baseURL = 'https://api.themoviedb.org/3'
const genres = '/genre/movie/list'
const poster ='image.tmdb.org/t/p/w500'
const movies = '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'


const urls = {
    movies: {
        base: movies,
        moviePosterByPoster_path: (poster_path: string) => `${poster_path}`
    },
    genres: {
        base: genres
    }
}

export {
    baseURL,
    urls,
    poster
}


