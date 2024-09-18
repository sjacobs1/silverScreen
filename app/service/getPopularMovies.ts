import { PopularMovies } from "../model/popularMovies";

export async function getPopularMovies(): Promise<PopularMovies> {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=2052300af48a4e777e1eaac356ed0aae');
    const data = await response.json();
    return data as PopularMovies;
}