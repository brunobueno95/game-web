import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./gameCard/GameCard";
import GameCardSkeleton from "./gameCard/GameCardSkeleton";
import GameCardContainer from "./gameCard/GameCardContainer";

import { GameQuery } from "../App";



interface Props {
  gameQuery: GameQuery;
  gameIDclickFunction : (id:number) => void;
}
const GameGrid = ({ gameQuery, gameIDclickFunction }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={8}
      marginTop={25}
    >
      {data &&
        data.length > 0 &&
        data.map((g) => (
          <GameCardContainer key={g.id}>
            <GameCard gameIDclickFunction={ gameIDclickFunction} game={g} />
          </GameCardContainer>
        ))}
      {isLoading &&
        skeletons.map((s, i) => (
          <GameCardContainer key={s}>
            <GameCardSkeleton key={i} />
          </GameCardContainer>
        ))}
    </SimpleGrid>
  );
};

export default GameGrid;
