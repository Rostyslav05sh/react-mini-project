export interface IMovie {
    page: number | null;
    results: IMovieRes[];
    total_pages?: number;
    total_results?: number;
}
export interface IMovieRes {
    name:string
    adult: boolean;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}