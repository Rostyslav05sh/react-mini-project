
const baseURL = 'https://api.themoviedb.org/3'
const genres = '/genre/movie/list'
const poster ='https://image.tmdb.org/t/p/w500'
const movies = '/discover/movie'
const movieIdFind = '/movie'


const urls = {
    movies: {
        base: movies,
        movieById:(id:number) => `${movieIdFind}/${id}`,
        moviePosterByPoster_path: (poster_path: string) => `${poster_path}`,
        movieImageById: (id:number) => `/movie/${id}/images`
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


