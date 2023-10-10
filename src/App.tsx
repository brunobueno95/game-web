import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlataformSelector from "./components/PlataformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery{
  genre: Genre | null,
  platform: Platform | null
}

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  //  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)
  const[gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav"
          "aside main"  `,
        }}
        templateColumns={{
          base:'1fr',
          lg:'200px 1fr',

        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingLeft={'5px'} ><GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre: Genre) => setGameQuery({...gameQuery, genre})}/></GridItem>
        </Show>
        <GridItem  px={10} paddingBottom={10} area="main">
          <PlataformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})} />
          {/* {JSON.stringify(import.meta.env)} */}
           <GameGrid gameQuery={gameQuery}/> 
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
