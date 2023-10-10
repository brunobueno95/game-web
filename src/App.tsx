import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlataformSelector from "./components/PlataformSelector";
import { Platform } from "./hooks/useGames";


function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)
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
          <GridItem area="aside" paddingLeft={'5px'} ><GenreList selectedGenre={selectedGenre} onSelectGenre={(genre: Genre) => setSelectedGenre(genre)}/></GridItem>
        </Show>
        <GridItem  px={10} paddingBottom={10} area="main">
          <PlataformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)} />
          {/* {JSON.stringify(import.meta.env)} */}
           <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/> 
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
