import { DiscoverMovie } from "../model/discoverMovie";

export async function getDiscoverMovies(): Promise<DiscoverMovie> {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=2052300af48a4e777e1eaac356ed0aae');
    const data = await response.json();
    return data as DiscoverMovie;
}