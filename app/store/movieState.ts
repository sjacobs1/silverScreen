import { create } from "zustand";
import { MovieDetails } from "../model/movieDetails";

interface MovieState {
    movie: MovieDetails[]
    selectedMovieId: number | null
    setSelectedMovieId: (id: number | null) => void
    getSelectedMovieId: () => number | null
}

export const useMovieState = create<MovieState>((set, get) => ({
    movie: [],
    selectedMovieId: null,
    setSelectedMovieId: (id) => set({ selectedMovieId: id }),
    getSelectedMovieId: () => {
        const { selectedMovieId } = get();
        return selectedMovieId
    }
}))