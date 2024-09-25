import { SeriesModel } from "../model/seriesModel";

export async function getDiscoverSeries(): Promise<SeriesModel> {
    const response = await fetch('https://api.themoviedb.org/3/discover/tv?api_key=2052300af48a4e777e1eaac356ed0aae');
    const data = await response.json();
    return data as SeriesModel;
}