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
        .then((res) => res.data),
    staleTime: 10 * 1000, //10s
    initialData: {count: platfroms.length, results: platfroms},
  });

export default usePlatforms;
