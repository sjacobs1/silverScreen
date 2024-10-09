import { SeriesDetails } from "../model/seriesDetails";

export async function getSeriesDetails(id: number): Promise<SeriesDetails> {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=2052300af48a4e777e1eaac356ed0aae`);
    const data = await response.json();
    return data as SeriesDetails;
}