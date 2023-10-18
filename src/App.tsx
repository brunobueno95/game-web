import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GamePage from "./components/GamePage";
import GenreList from "./components/GenreList";
import PlataformSelector from "./components/PlataformSelector";
import SortSelector from "./components/SortSelector";
import Navbar from "./components/navbar/Navbar";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameCardOpen, setGameCardOpen] = useState(false);
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [gameIdPage, setGameIdPage] = useState<number>()
  const handleGameCardClick = (id: number) => {
    console.log("Game card clicked with id:", id);
    setGameIdPage(id)
    setGameCardOpen(true);
  };
  if (gameCardOpen && gameIdPage)
    return (
  
     <GamePage gameId={gameIdPage} openClosePage={setGameCardOpen} />
    );

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav"
          "aside main"  `,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingLeft={"5px"}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre: Genre) =>
                setGameQuery({ ...gameQuery, genre })
              }
            />
          </GridItem>
        </Show>
        <GridItem px={10} paddingBottom={10} area="main">
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            {" "}
            <Box marginRight={5}>
              <PlataformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
            </Box>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
          <GameGrid
            gameIDclickFunction={handleGameCardClick}
            gameQuery={gameQuery}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
