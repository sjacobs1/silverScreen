import { PopularSeries } from "../model/popularSeries";

export async function getPopularSeries(): Promise<PopularSeries> {
  const response = await fetch(
    "https://api.themoviedb.org/3/tv/top_rated?api_key=2052300af48a4e777e1eaac356ed0aae"
  );
  const data = await response.json();
  return data as PopularSeries;
}
