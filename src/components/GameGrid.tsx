import React, { useState,useEffect } from 'react'
import apiClient from '../services/api-client'
import {Text} from '@chakra-ui/react'

interface Game {
    id:number;
    name: string;
}
interface FetchGamesResponse {
    count :number;
    results: Game[];

}

const GameGrid = () => {
    const [games, setGames]= useState<Game[]>([])
    const [error, setError] = useState('')

    useEffect(()=>{
        apiClient.get<FetchGamesResponse>('/games')
        .then(res => setGames(res.data.results))
        .catch(err => setError(err.message)).then(()=> console.log(error))
    })
  return (
    <> {
        error && <Text>{error}</Text>
    }
   <ul>
    {games && games.length > 0 ? (
      games.map(g => <li key={g.id}>{g.name}</li>)
    ) : (
      <li>No games available.</li>
    )}
   </ul>
   </>
  )
}

export default GameGrid
