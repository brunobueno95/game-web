import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: unknown[]
) => {
  const [data, setData] = useState<T[]>([]);

  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      let mounted = true; 

      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await apiClient.get<FetchResponse<T>>(endpoint, {
            ...requestConfig,
          });
          if (mounted) {
            let responseData;
      if (Array.isArray(response.data.results)) {
        responseData = response.data.results as T[];
      } else {
        responseData = [response.data as T];
      } console.log('API response data:', responseData);
      setData(responseData);
            setLoading(false);
          }
        } catch (err) {
          if (mounted) {
            if (err && (err as AxiosError).message) {
                setError((err as AxiosError).message);
              } else {
                setError('An error occurred.');
              }
            setLoading(false);
          }
        }
      };

      fetchData();

      return () => {
        mounted = false; // Set mounted to false on component unmount
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
