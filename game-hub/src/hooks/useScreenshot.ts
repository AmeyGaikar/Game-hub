import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import {Screenshot} from "../entities/Screenshot"

const useScreenshot = (gameId: number) => {
  const apiCLient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ['Screenshot', gameId],
    queryFn: apiCLient.getAll
  })
};

export default useScreenshot;
