import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/flipper.webp";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={"90px"} borderRadius={"20px"} />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default Navbar;
