import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

// export interface FetchResponseIndividual<T>{
//   data: T;
// }

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_REACT_API_KEY,
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
  getOne = () => {
    return axiosInstance.get<T>(this.endpoint)
    .then((res) => res.data);
  };
}

export default APIClient;
