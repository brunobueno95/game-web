import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";


export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const apiClient = new APIClient<Platform>('platforms/lists/parents')

const usePlatforms = () =>
  useQuery({
    queryKey: ["platform"],
    queryFn:apiClient.getAll
        // staleTime:24 * 60 * 60 * 1000 // 24 hours
  });

export default usePlatforms;
