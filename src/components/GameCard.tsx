import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, Image, CardBody, Heading, HStack, } from '@chakra-ui/react'
import PlatformIcon from './navbar/PlatformIcon'
import ScoreMeta from './ScoreMeta'
import getCroppedImageUrl from '../services/image-url'


interface Props {
    game: Game
}

const GameCard = ({game}:Props) => {
  return (
   <Card borderRadius={10} overflow={'hidden'} maxHeight={"300px"}>
    <Image height={"70%"} src={getCroppedImageUrl(game.background_image) }/>
    <CardBody height={"30%"}>
        <Heading fontSize={'xl'} >{game.name}</Heading>
     <HStack justifyContent={'space-between'}> <PlatformIcon platforms={game.parent_platforms.map(p=>p.platform)}/> <ScoreMeta score={game.metacritic}/></HStack>
    </CardBody>
   </Card>
  )
}

export default GameCard
