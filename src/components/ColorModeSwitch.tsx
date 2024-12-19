import { Checkbox, HStack, useColorMode, Image, Text } from "@chakra-ui/react";
import cMode from "../assets/colorMode.png";
const ColorModeSwitch = () => {
  // colorMode represents the current Mode
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack padding="20px">
      //
      <Checkbox isChecked={colorMode === "dark"} onChange={toggleColorMode}>
        <Text whiteSpace="nowrap">Dark Mode</Text>
      </Checkbox>
    </HStack>
  );
};

export default ColorModeSwitch;
