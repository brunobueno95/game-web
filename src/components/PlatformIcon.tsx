import { HStack, Icon } from "@chakra-ui/react";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { IconType } from "react-icons/lib/esm/iconBase";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  platforms: Platform[];
}

const PlatformIcon = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    androind: FaAndroid,
  };
  return (
    <div>
      <HStack>
        {" "}
        {platforms.map((p) => (
          <Icon key={p.id} color={"gray.500"} as={iconMap[p.slug]} />
        ))}
      </HStack>
    </div>
  );
};

export default PlatformIcon;
