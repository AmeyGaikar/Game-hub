import { useQuery } from "@tanstack/react-query";
import genre from "../data/genre";
import APIClient from "../services/api-client";
import ms from 'ms';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const apiClient = new APIClient<Genre>("/genres");
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genre,
  });
};
export default useGenres;
