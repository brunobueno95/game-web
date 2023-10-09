import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/flipper.webp"
import style from "./page.module.css"

const Navbar = () => {
  return (
    <HStack>
      <div className={style.imgContainer}>
        <Image src={logo} boxSize={"90px"} borderRadius={"20px"}  />
      </div>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default Navbar;
