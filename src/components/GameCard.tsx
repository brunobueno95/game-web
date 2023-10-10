import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, Image, CardBody, Heading, } from '@chakra-ui/react'
import PlatformIcon from './navbar/PlatformIcon'


interface Props {
    game: Game
}

const GameCard = ({game}:Props) => {
  return (
   <Card borderRadius={10} overflow={'hidden'} maxHeight={"300px"}>
    <Image height={"70%"} src={game.background_image}/>
    <CardBody height={"30%"}>
        <Heading fontSize={'xl'} >{game.name}</Heading>
      <PlatformIcon platforms={game.parent_platforms.map(p=>p.platform)}/>
    </CardBody>
   </Card>
  )
}

export default GameCard
