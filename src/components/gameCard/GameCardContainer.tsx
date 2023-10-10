import {ReactNode} from 'react'
import {Box, useColorModeValue} from '@chakra-ui/react'

interface Props {
    children : ReactNode
}

const GameCardContainer = ({children}:Props) => {
  const boxShadow = useColorModeValue('0px 1px 5px #151515','0px 1px 5px #d1cecedc')
  return (
    <Box 
    cursor={'pointer'}
    boxShadow={boxShadow}    
    borderRadius={10}
    overflow={"hidden"}
   height={"350px"}
    width={"100%"}>
      {children}
    </Box>
  )
}

export default GameCardContainer
