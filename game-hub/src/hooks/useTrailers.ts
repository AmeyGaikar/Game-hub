import { Trailer } from "../entities/Trailer";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

const useTrailers = (gameId: number) => {
  const apiCLient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["Trailer", gameId],
    queryFn: apiCLient.getAll,
  });
};

export default useTrailers;
 