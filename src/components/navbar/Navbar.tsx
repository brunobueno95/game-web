import { Box, HStack, Image, useColorModeValue } from "@chakra-ui/react";
import logoDark from "../../assets/flipperNobg.png";
import logoLight from "../../assets/flipper.webp";

import ColorModeSwitch from "../ColorModeSwitch";
import SearchInput from "../SearchInput";

const Navbar = () => {
  const logoSrc = useColorModeValue(logoLight, logoDark);
  return (
    <HStack px={"20px"}>
      <Box boxSize={"110px"} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Image
      
          src={logoSrc}
          boxSize={{ base: "60px", md: "80px", lg:"80px" }}
          borderRadius={{base:"10px", md:'20px'}}
          cursor={"pointer"}
          boxShadow={"0px 1px 4px #d1cecedc"}
          
        />
      </Box>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
