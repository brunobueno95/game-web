import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./navbar/gameCard/GameCard";
import GameCardSkeleton from "./navbar/gameCard/GameCardSkeleton";
import GameCardContainer from "./navbar/gameCard/GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {" "}
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={8}
        px={20}
        marginTop={25}
      >
        {games &&
          games.length > 0 &&
          games.map((g) => <GameCardContainer><GameCard key={g.id} game={g} /></GameCardContainer>)}
        {isLoading && skeletons.map((s, i) => <GameCardContainer><GameCardSkeleton key={i} /></GameCardContainer>)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
