import { create } from "zustand";
import { SeriesDetails } from "../model/seriesDetails";

interface SeriesState {
    series: SeriesDetails[]
    selectedSeriesId: number | null
    setSelectedSeriesId: (id: number | null) => void
    getSelectedSeriesId: () => number | null
}

export const useSeriesState = create<SeriesState>((set, get) => ({
    series: [],
    selectedSeriesId: null,
    setSelectedSeriesId: (id) => set({ selectedSeriesId: id }),
    getSelectedSeriesId: () => {
        const { selectedSeriesId } = get();
        return selectedSeriesId
    }
}))