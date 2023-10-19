import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./gameCard/GameCard";
import GameCardSkeleton from "./gameCard/GameCardSkeleton";
import GameCardContainer from "./gameCard/GameCardContainer";

import { GameQuery } from "../App";
import React, { useEffect } from "react";

interface Props {
  gameQuery: GameQuery;
  gameIDclickFunction: (id: number) => void;
}
const GameGrid = ({ gameQuery, gameIDclickFunction }: Props) => {
  const loadMorePosts = () => {
    if (isFetchingNextPage) return; // Don't fetch if a request is already in progress
    fetchNextPage();
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    // Check if the user has scrolled to the bottom (or near the bottom)
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      loadMorePosts();
    }
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error.message}</Text>;
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={8}
        marginTop={25}
      >
        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.results.map((g) => (
              <GameCardContainer key={g.id}>
                <GameCard gameIDclickFunction={gameIDclickFunction} game={g} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}

        {isLoading &&
          skeletons.map((s, i) => (
            <GameCardContainer key={s}>
              <GameCardSkeleton key={i} />
            </GameCardContainer>
          ))}
      </SimpleGrid>
      {/* {hasNextPage && (
        <Button onClick={()=>fetchNextPage()}>{isFetchingNextPage ? "Loading..." : "Load More"}</Button>
      )} */}
    </>
  );
};

export default GameGrid;
