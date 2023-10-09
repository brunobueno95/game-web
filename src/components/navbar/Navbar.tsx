import { HStack, Image,} from "@chakra-ui/react";
import logo from "../../assets/flipper.webp"
import style from "./page.module.css"
import ColorModeSwitch from "../ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} paddingRight={"20px"}>
      <div className={style.imgContainer}>
        <Image src={logo} boxSize={"90px"} borderRadius={"20px"} cursor={"pointer"} />
      </div>
     <ColorModeSwitch/>
    </HStack>
  );
};

export default Navbar;
