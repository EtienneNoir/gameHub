import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PLatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton
        zIndex={1500}
        bg="gray.700"
        paddingX="7px"
        paddingY="5px"
        borderRadius={10}
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList bg="gray.700" paddingX="20px" paddingY="10px">
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PLatformSelector;
