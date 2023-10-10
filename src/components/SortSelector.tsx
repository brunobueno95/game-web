import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
   
  } from "@chakra-ui/react";
  import { BsChevronDown } from "react-icons/bs";

  interface Props{
    onSelectSortOrder: (sortOrder:string) => void;
    sortOrder:string
  }

const SortSelector = ({onSelectSortOrder, sortOrder} : Props) => {
    const sortOrdersList = [
        {value:'',label:'Relevance'},
        {value:'-added',label:'Date added'},
        {value:'name',label:'Name'},
        {value:'-released',label:'Release Date'},
        {value:'-metacritic',label:'Popularity'},
        {value:'-rating',label:'Average Rating'}
    ]

    const currentSort = sortOrdersList.find((o)=> o.value === sortOrder)
  return (
    <Menu >
    <MenuButton as={Button} rightIcon={<BsChevronDown />}>
   Order by: {currentSort?.label}
    </MenuButton>
    <MenuList>
 {sortOrdersList.map((o)=> <MenuItem onClick={()=> onSelectSortOrder(o.value)} key={o.value} value={o.value}>{o.label}</MenuItem>)}
    </MenuList>
  </Menu>

  )
}

export default SortSelector
