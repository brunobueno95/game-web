import { HStack, Image, useColorModeValue} from "@chakra-ui/react";
import logoDark from "../../assets/flipperNobg.png"
import logoLight from "../../assets/flipper.webp"
import style from "./page.module.css"
import ColorModeSwitch from "../ColorModeSwitch";

const Navbar = () => {
 
  const logoSrc = useColorModeValue(logoLight,logoDark )
  return (
    <HStack justifyContent={"space-between"} paddingRight={"20px"}>
      <div className={style.imgContainer}>
        <Image src={logoSrc} boxSize={"80px"} borderRadius={"20px"} cursor={"pointer"} boxShadow={'0px 1px 4px #d1cecedc'}/>
      </div>
     <ColorModeSwitch/>
    </HStack>
  );
};

export default Navbar;
