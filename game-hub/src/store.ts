import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  SetGenreId: (genreId: number) => void;
  SetPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameStore = create<GameQueryStore>((set) => ({
  gameQuery: {},

  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),

  SetGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),

  SetPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),

  setSortOrder: (sortOrder) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortOrder },
    })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Game store", useGameStore);

export default useGameStore