import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface fetchGenreResponse  {
  count: number,
  results: Genre[]
}

const fetchGenres = () => {
  return apiClient.get<fetchGenreResponse>("/genres").then((res) => res.data.results)
};


const useGenre = () => {
  const {
    data,
    error: errors,
    isLoading,
  } = useQuery<Genre[]>({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: 1* 60 * 1000,
  });

  return { data, errors, isLoading };
};

export default useGenre;
