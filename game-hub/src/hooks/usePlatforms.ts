import { useQuery } from "@tanstack/react-query";
import platfroms from "../data/platfroms";
import APIClient from "../services/api-client";
import ms from "ms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const apiClient = new APIClient<Platform>("/platforms/lists/parents");
 return useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platfroms
  })
}


export default usePlatforms;
