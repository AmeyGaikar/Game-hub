import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface fetchResponse<T> {
    count: number,
    results: T[]
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [errors, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
      
      setLoading(true);
      apiClient
        .get<fetchResponse<T>>(endpoint, { signal: controller.signal })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
  
      return () => controller.abort();
    }, []);
  
    return { data, errors, isLoading };
}

export default useData;