import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
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
          <GridItem area="aside" paddingLeft={'5px'} ><GenreList/></GridItem>
        </Show>
        <GridItem area="main">
          {/* {JSON.stringify(import.meta.env)} */}
           <GameGrid/> 
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
