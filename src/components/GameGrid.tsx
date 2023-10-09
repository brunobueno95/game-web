
import {Text, SimpleGrid} from '@chakra-ui/react'
import useGames from "../hooks/useGames"
import GameCard from './GameCard'


const GameGrid = () => {
   const {games, error} = useGames()
  return (
    <> {
        error && <Text>{error}</Text>
    }
   <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} spacing={8} px={20} marginTop={25}>
    {games && games.length > 0 ? (
      games.map(g => <GameCard key={g.id} game={g}/>)
    ) : (
      <li>No games available.</li>
    )}
   </SimpleGrid>
   </>
  )
}

export default GameGrid
