import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import Searchinput from "./Searchinput";
const NavBar = () => {
  return (
    <HStack>
      <Image marginX={3} src={logo} boxSize="60px" />
      <Searchinput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
