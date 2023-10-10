import useData from "./useData";

interface GameIndividual {
  id: number;
  name: string;
  description: string;
  background_image: string;
  website: string;
}

const useIndividualGame = (id:number) =>
  useData<GameIndividual>(`/games/${id}`);

export default useIndividualGame;
