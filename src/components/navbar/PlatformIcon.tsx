import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons/lib/esm/iconBase";
import { Platform } from "../../hooks/useGames";
import { HStack, Icon, } from "@chakra-ui/react";


interface Props {
  platforms: Platform[];
}

const PlatformIcon = ({ platforms }: Props) => {
    const iconMap:{[key:string] : IconType} = {
       pc: FaWindows,
       playstation: FaPlaystation,
       xbox: FaXbox,
       nintendo: SiNintendo,
       mac: FaApple,
       linux: FaLinux,
       ios:MdPhoneIphone,
       web:BsGlobe,
       androind:FaAndroid

    }
  return (
    <div>
      <HStack  >
        {" "}
        {platforms.map((p) => (
          <Icon color={'gray.500'} as={iconMap[p.slug]} />
        ))}
      </HStack>
    </div>
  );
};

export default PlatformIcon;
