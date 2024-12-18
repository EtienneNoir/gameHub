import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PLatformSelector = () => {
  const { data, error } = usePlatforms();
  if (error) return null;
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
        Platforms
      </MenuButton>
      <MenuList zIndex={1500} bg="#4A5568" paddingX="20px" paddingY="10px">
        {data.map((platform) => (
          <MenuItem key={platform.id}>{platform.name} </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PLatformSelector;
