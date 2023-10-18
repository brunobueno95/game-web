import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";


interface GameIndividual {
  id: number;
  name: string;
  description: string;
  background_image: string;
  website: string;
}

const useIndividualGame = (id: number) =>
  useQuery({
    queryKey: ["individualGame"],
    queryFn: () => apiClient.get<GameIndividual>(`games/${id}`),
  });

export default useIndividualGame;
