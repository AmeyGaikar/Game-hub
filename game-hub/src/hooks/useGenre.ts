import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Genre {
    id: number,
    name: string
}

interface genreFetchResponse {
    count: number,
    results: Genre[]
}

const useGenre = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [errors, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
      
      setLoading(true);
      apiClient
        .get<genreFetchResponse>("/genres", { signal: controller.signal })
        .then((res) => {
          setGenres(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
  
      return () => controller.abort();
    }, []);
  
    return {  genres, errors, isLoading };
}

export default useGenre