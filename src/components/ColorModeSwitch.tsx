import {
  Checkbox,
  HStack,
  useColorMode,
  Image,
  Switch,
  Text,
} from "@chakra-ui/react";
import cMode from "../assets/colorMode.png";
const ColorModeSwitch = () => {
  // colorMode represents the current Mode
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      //
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      >
        <Image src={cMode} boxSize="100px" />
      </Switch>
    </HStack>
  );
};

export default ColorModeSwitch;
