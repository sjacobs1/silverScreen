import { SeasonDetails } from "../model/seasonDetails";
import { create } from "zustand";

interface SelectedSeasonState {
    season: SeasonDetails | null;
    selectedSeasonId: number | null;
    setSelectedSeasonId: (id: number | null) => void;
    getSelectedSeasonId: () => number | null;
}

export const useSelectedSeasonState = create<SelectedSeasonState>((set, get) => ({
    season: null,
    selectedSeasonId: null,
    setSelectedSeasonId: (id: number | null) => set({ selectedSeasonId: id }),
    getSelectedSeasonId: () => {
        const { selectedSeasonId } = get();
        return selectedSeasonId
    }
}))