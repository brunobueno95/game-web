import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface GameIndividual {
  id: number;
  name: string;
  description: string;
  background_image: string;
  website: string;
}

const useIndividualGame = (id: number) => {
  const apiClient = new APIClient<GameIndividual>(`/games/${id}`);
 return  useQuery({
    queryKey: ["individualGame"],
    queryFn: apiClient.getOne,
  });
};
export default useIndividualGame;
