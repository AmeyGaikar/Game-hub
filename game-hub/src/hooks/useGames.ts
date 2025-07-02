import { CanceledError } from "axios";
import apiClient from "../services/api-client";
import { useEffect, useState } from "react";

const useGames = () => {
  interface Game {
    id: number;
    name: string;
  }

  interface gameFetchResponse {
    count: number;
    results: Game[];
  }

  const [games, setGames] = useState<Game[]>([]);
  const [errors, setError] = useState("");
  
  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<gameFetchResponse>("/games", {signal: controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

      return () => controller.abort();
  }, []);

  return { games, errors };
};

export default useGames;
