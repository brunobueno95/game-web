
import {Text, SimpleGrid} from '@chakra-ui/react'
import useGames from "../hooks/useGames"
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton';


const GameGrid = () => {
   const {games, error, isLoading} = useGames();
   const skeletons = [1,2,3,4,5,6];
  return (
    <> {
        error && <Text>{error}</Text>
    }
   <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} spacing={8} px={20} marginTop={25}>
    {games && games.length > 0 && (
      games.map(g => <GameCard key={g.id} game={g}/>)
    ) }
     {isLoading && skeletons.map((s,i)=>(
    <GameCardSkeleton key={i}/>
   ))}
   </SimpleGrid>
  
   </>
  )
}

export default GameGrid
