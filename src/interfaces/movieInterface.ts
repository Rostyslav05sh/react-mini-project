export interface IMovieRes {
    id: number;
    genre_ids: number[];
    original_title: string;
    overview: string;
    poster_path: string;
}

export interface IMovie {
    page: number;
    results: IMovieRes[],
    prev: null,
    next: null
}
