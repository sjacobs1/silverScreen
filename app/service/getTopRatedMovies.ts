import { TopRatedMovies } from "../model/topRatedMovies";

export async function getTopRatedMovies(): Promise<TopRatedMovies> {
    const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=2052300af48a4e777e1eaac356ed0aae"
    );
    const data = await response.json();
    return data as TopRatedMovies;
}