import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton
        zIndex={1500}
        bg="#4A5568"
        paddingX="7px"
        paddingY="5px"
        borderRadius={10}
        as={Button}
        rightIcon={<BsChevronBarDown />}
      >
        Order by : relevance
      </MenuButton>
      <MenuList zIndex={1500} bg="#4A5568" paddingX="20px" paddingY="10px">
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release data</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
