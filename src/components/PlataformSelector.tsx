import  { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform | null) => void;
  selectedPlatform: Platform | null;
}

const PlataformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const [isALL, setIsAll] = useState(false);
  const { data, error, isLoading } = usePlatforms();
  if (isLoading) return <Spinner />;
  if (error) return null;
  const handleAllMenuItemClick = () => {
    onSelectPlatform(null);
    setIsAll(true);
  };
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {isALL
          ? "All Platforms"
          : selectedPlatform
          ? selectedPlatform.name
          : "Plataforms"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={handleAllMenuItemClick}>All</MenuItem>
        {data.map((platform) => (
          <MenuItem
            onClick={() =>{setIsAll(false); onSelectPlatform(platform)}}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlataformSelector;
