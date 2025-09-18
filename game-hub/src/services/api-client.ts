import axios, { AxiosRequestConfig } from "axios";

export interface fetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "dd1d14b41ba54a22a66a987fbf16ed22",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<fetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
 
  get = (id: string | number) => {
    return axiosInstance
      .get<T>(this.endpoint + '/' + id)
      .then((res) => res.data);
  };
}

export default APIClient;
