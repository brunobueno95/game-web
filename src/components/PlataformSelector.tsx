import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button, Spinner } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlataformSelector = () => {
    const{data, error, isLoading} = usePlatforms();
    if(isLoading) return <Spinner/>
    if(error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
        Plataforms
      </MenuButton>
      <MenuList>
        {data.map((platform)=><MenuItem key={platform.id}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default PlataformSelector;
