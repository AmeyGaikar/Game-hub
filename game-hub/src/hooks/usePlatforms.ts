import { useQuery } from "@tanstack/react-query";
import platfroms from "../data/platfroms";
import APIClient from "../services/api-client";

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
    staleTime: 24 * 60 * 60 * 1000,
    initialData: {count: platfroms.length, results: platfroms}
  })
}


export default usePlatforms;
