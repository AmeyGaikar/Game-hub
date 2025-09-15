import { useQuery } from "@tanstack/react-query";
import genre from "../data/genre";
import APIClient from "../services/api-client";
import ms from "ms";
import { Genre } from "../entities/Genre";

const useGenres = () => {
  const apiClient = new APIClient<Genre>("/genres");
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genre,
  });
};
export default useGenres;
