import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  const apiClient = new APIClient<Game>("/games");
  const pageSize = 10;

  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({pageParam = 1}) => apiClient.getAll({
      params: {
        genres: gameQuery.genre,
        parent_platforms: gameQuery.platform,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
        page_size: pageSize
      }
    }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    }
  });
};
export default useGames;
