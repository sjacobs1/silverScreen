import { MovieModel } from "../model/movieModel";

export async function getSimilarMovies(movieId: number): Promise<MovieModel> {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=2052300af48a4e777e1eaac356ed0aae`);
    const data = await response.json();
    return data as MovieModel;
}