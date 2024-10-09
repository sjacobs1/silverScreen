import { MovieDetails } from "../model/movieDetails";

export async function getMovieDetails(id: number): Promise<MovieDetails> {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2052300af48a4e777e1eaac356ed0aae`);
    const data = await response.json();
    return data as MovieDetails;
}