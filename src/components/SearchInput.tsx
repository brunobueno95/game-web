import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import {BsSearch} from 'react-icons/bs'

const SearchInput = () => {
  return (
    <InputGroup>
    <InputLeftElement children={<BsSearch/>}/>
      <Input
        borderRadius={20}
        variant={"filled"}
        placeholder={"Search for your favorite game..."}
      />
    </InputGroup>
  );
};

export default SearchInput;
