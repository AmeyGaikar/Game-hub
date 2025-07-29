import { useQuery } from "@tanstack/react-query";
import platfroms from "../data/platfroms";
import { fetchResponse } from "./useData";
import apiClient from "../services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<fetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data.results),
    staleTime: 10 * 1000, //10s
    initialData: platfroms,
  });

export default usePlatforms;
