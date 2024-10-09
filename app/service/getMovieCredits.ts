import {Credits} from '../model/creditsModel'

export async function getMovieCredits(id: number): Promise<Credits> {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=2052300af48a4e777e1eaac356ed0aae`);
    const data = await response.json();
    return data as Credits;
}