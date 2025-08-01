import { useQuery } from "@tanstack/react-query";
import genre from "../data/genre";
import APIClient from "../services/api-client";

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
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genre,
  });
};
export default useGenres;
